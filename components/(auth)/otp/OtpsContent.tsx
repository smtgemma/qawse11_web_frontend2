"use client";

import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import Link from "next/link";
import {
  useVerifyOtpMutation,
  useResendOtpMutation,
} from "@/redux/api/authApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { setOtpPurpose } from "@/redux/features/authSlice";
import SuccessContent from "../SuccessContent";
import { toast } from "sonner";

// Backend OTP Configuration Constants
const OTP_EXPIRES_IN_MINUTES = 5; // OTP expires in 5 minutes
const OTP_RATE_LIMIT_COUNT = 3; // Max 3 resend attempts
const OTP_RATE_LIMIT_WINDOW_MINUTES = 60; // Rate limit window: 60 minutes
const OTP_MAX_VERIFY_ATTEMPTS = 5; // Max 5 verification attempts

// Zod Schema for Form Validation
const otpSchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be 6 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});

type OtpFormData = z.infer<typeof otpSchema>;

// OTP Input Component
interface OtpInputProps {
  length: number;
  onChange: (otp: string) => void;
  error?: string;
  disabled?: boolean;
}

const OtpInput: React.FC<OtpInputProps> = ({
  length,
  onChange,
  error,
  disabled,
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    onChange(combinedOtp);

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").slice(0, length);

    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split("");
    setOtp([...newOtp, ...new Array(length - newOtp.length).fill("")]);
    onChange(pastedData);

    const nextIndex = Math.min(pastedData.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="w-full">
      <label className="block text-sm text-white/70 mb-2 font-normal">
        Enter OTP Code
      </label>
      <div className="flex gap-3 justify-between">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            disabled={disabled}
            className={`w-full h-14 text-center text-2xl font-semibold bg-white/10 rounded-xl text-white focus:outline-none focus:ring-2 transition-all backdrop-blur-sm ${
              error
                ? "ring-2 ring-red-500 focus:ring-red-500"
                : "focus:ring-[#1E72A1]"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          />
        ))}
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="shrink-0">
            <circle
              cx="7"
              cy="7"
              r="6"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M7 9V7M7 5H7.01"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

// Main Component
const OtpContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const [resendTimer, setResendTimer] = useState(OTP_EXPIRES_IN_MINUTES * 60); // Convert minutes to seconds
  const [canResend, setCanResend] = useState(false);
  const [resendAttempts, setResendAttempts] = useState(0);
  const [verifyAttempts, setVerifyAttempts] = useState(0);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [rateLimitTimer, setRateLimitTimer] = useState(
    OTP_RATE_LIMIT_WINDOW_MINUTES * 60
  );
  const [otpExpired, setOtpExpired] = useState(false);

  const router = useRouter();
  const { otpPurposeData } = useAppSelector((state) => state.auth);
  const [verifyOtpAction, { isLoading: isVerifying }] = useVerifyOtpMutation();
  const [resendOtpAction, { isLoading: isResending }] = useResendOtpMutation();

  const [isVarified, setIsVerified] = useState(false);
  const [verificationError, setVerificationError] = useState<string | null>(
    null
  );

  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpFormData>({
    resolver: zodResolver(otpSchema),
    mode: "onChange",
    defaultValues: {
      otp: "",
    },
  });

  // OTP Expiry Timer
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
        if (resendTimer - 1 === 0) {
          setOtpExpired(true);
        }
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  // Rate Limit Timer
  useEffect(() => {
    if (isRateLimited && rateLimitTimer > 0) {
      const timer = setTimeout(() => {
        setRateLimitTimer(rateLimitTimer - 1);
        if (rateLimitTimer - 1 === 0) {
          setIsRateLimited(false);
          setResendAttempts(0);
          setRateLimitTimer(OTP_RATE_LIMIT_WINDOW_MINUTES * 60);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isRateLimited, rateLimitTimer]);

  const handleOtpChange = (otp: string) => {
    setValue("otp", otp, { shouldValidate: true });
    // Clear verification error when user starts typing new OTP
    if (verificationError) {
      setVerificationError(null);
    }
  };

  const handleResend = async () => {
    if (
      !canResend ||
      isRateLimited ||
      !otpPurposeData?.email ||
      !otpPurposeData?.purpose
    ) {
      return;
    }

    // Check rate limiting
    if (resendAttempts >= OTP_RATE_LIMIT_COUNT) {
      setIsRateLimited(true);
      toast.warning(
        `Rate limit exceeded. You can only request ${OTP_RATE_LIMIT_COUNT} OTPs per ${OTP_RATE_LIMIT_WINDOW_MINUTES} minutes.`
      );
      return;
    }

    try {
      const { email, purpose } = otpPurposeData;

      // Call the resend OTP API
      const res = await resendOtpAction({
        email,
        purpose,
      }).unwrap();

      if (res.success) {
        // Update resend attempts
        const newAttempts = resendAttempts + 1;
        setResendAttempts(newAttempts);

        // If reached rate limit, activate rate limiting
        if (newAttempts >= OTP_RATE_LIMIT_COUNT) {
          setIsRateLimited(true);
        }

        // Reset OTP timer
        setResendTimer(OTP_EXPIRES_IN_MINUTES * 60);
        setOtpExpired(false);
        setCanResend(false);

        toast.success("A new OTP has been sent to your email!");
      } else {
        throw new Error(res.message || "Failed to resend OTP");
      }
    } catch (error: any) {
      console.error("Resend error:", error);

      // Handle rate limiting from backend
      if (error.status === 429) {
        setIsRateLimited(true);
        toast.error(
          `Rate limit exceeded. Please wait ${OTP_RATE_LIMIT_WINDOW_MINUTES} minutes before requesting another OTP.`
        );
      } else {
        toast.error(
          error.data?.message ||
            error.message ||
            "Failed to resend OTP. Please try again."
        );
      }
    }
  };

  const onSubmit = async (data: OtpFormData) => {
    // Check verification attempts
    if (verifyAttempts >= OTP_MAX_VERIFY_ATTEMPTS) {
      toast.warning(
        `Maximum verification attempts (${OTP_MAX_VERIFY_ATTEMPTS}) exceeded. Please request a new OTP.`
      );
      return;
    }

    // Check if OTP is expired
    if (otpExpired) {
      toast.error(
        `OTP has expired after ${OTP_EXPIRES_IN_MINUTES} minutes. Please request a new one.`
      );
      return;
    }

    try {
      if (!otpPurposeData?.email || !otpPurposeData?.purpose) {
        throw new Error("OTP context missing");
      }

      const { email, purpose } = otpPurposeData;

      if (purpose === "VERIFY") {
        const res = await verifyOtpAction({
          otp: data.otp,
          email,
          purpose,
        }).unwrap();

        if (res.success) {
          setIsVerified(true);
          setVerificationError(null);
        }
      } else {
        dispatch(setOtpPurpose({ otp: data.otp }));
        router.push("/reset-password");
      }
    } catch (error: any) {
      console.error("OTP verification error:", error);

      // Increment verification attempts
      const newAttempts = verifyAttempts + 1;
      setVerifyAttempts(newAttempts);

      // Check if max attempts reached
      if (newAttempts >= OTP_MAX_VERIFY_ATTEMPTS) {
        toast.error(
          `Maximum verification attempts (${OTP_MAX_VERIFY_ATTEMPTS}) reached. OTP has been disabled.`
        );
      }

      // Set error message
      const errorMessage =
        error.data?.message ||
        error.message ||
        "Invalid OTP. Please try again.";
      setVerificationError(errorMessage);

      // Show remaining attempts
      const remainingAttempts = OTP_MAX_VERIFY_ATTEMPTS - newAttempts;
      if (remainingAttempts > 0) {
        toast.error(
          `${errorMessage}. ${remainingAttempts} attempt(s) remaining.`
        );
      }
    }
  };

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Left Side - Illustration */}
        <div className="w-full lg:w-auto hidden md:flex justify-center lg:justify-start shrink-0">
          <div
            className="relative w-full max-w-[446px] lg:w-[446px]"
            style={{ aspectRatio: "446/629" }}>
            <Image
              src="/images/auth-left.png"
              alt="AI Technology Interface"
              width={446}
              height={629}
              className="w-full h-full object-cover rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Right Side - Form */}
        {isVarified ? (
          <SuccessContent
            title="verified successfully!"
            sub_title="You are now authenticated."
          />
        ) : (
          <div className="w-full lg:w-auto lg:max-w-[450px] shrink-0">
            {/* Logo */}
            <div className="mb-8">
              <CompanyLogo />
            </div>

            {/* Title */}
            <h2 className="text-[32px] lg:text-[36px] font-semibold text-white mb-4 leading-tight">
              Verify Your Email
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 text-sm mb-8">
              We&apos;ve sent a 6-digit code to your email address. Please enter
              it below to continue.
            </p>

            {/* Additional Info */}
            {/* <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-sm text-gray-300">
                • OTP expires in:{" "}
                <span className="text-white font-semibold">
                  {formatTime(resendTimer)}
                </span>
              </p>
              <p className="text-sm text-gray-300 mt-1">
                • Verification attempts:{" "}
                <span className="text-white font-semibold">
                  {verifyAttempts}/{OTP_MAX_VERIFY_ATTEMPTS}
                </span>
              </p>
              <p className="text-sm text-gray-300 mt-1">
                • Resend attempts:{" "}
                <span className="text-white font-semibold">
                  {resendAttempts}/{OTP_RATE_LIMIT_COUNT}
                </span>
              </p>
              {isRateLimited && (
                <p className="text-sm text-amber-400 mt-1">
                  • Rate limited. Try again in: {formatTime(rateLimitTimer)}
                </p>
              )}
              {otpExpired && (
                <p className="text-sm text-red-400 mt-1">
                  • OTP has expired. Please request a new one.
                </p>
              )}
            </div> */}

            {/* Form */}
            <div className="space-y-6">
              {/* OTP Input */}
              <OtpInput
                length={6}
                onChange={handleOtpChange}
                error={verificationError || errors.otp?.message}
                disabled={
                  verifyAttempts >= OTP_MAX_VERIFY_ATTEMPTS || otpExpired
                }
              />

              {/* Resend Timer */}
              <div className="flex justify-center">
                {canResend && !isRateLimited ? (
                  <button
                    onClick={handleResend}
                    disabled={
                      isResending ||
                      isRateLimited ||
                      verifyAttempts >= OTP_MAX_VERIFY_ATTEMPTS
                    }
                    className="text-sm text-[#3A9AD4] hover:text-[#1E72A1] transition-colors font-medium focus:outline-none focus:underline disabled:text-gray-500 disabled:cursor-not-allowed">
                    {isResending ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-current"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Resend OTP"
                    )}
                  </button>
                ) : (
                  <p className="text-sm text-gray-400">
                    {isRateLimited ? (
                      <>Resend disabled for {formatTime(rateLimitTimer)}</>
                    ) : isResending ? (
                      "Sending new OTP..."
                    ) : (
                      <>
                        Resend OTP in{" "}
                        <span className="text-white font-semibold">
                          {formatTime(resendTimer)}
                        </span>
                      </>
                    )}
                  </p>
                )}
              </div>

              {/* Verify Button */}
              <button
                onClick={handleSubmit(onSubmit)}
                disabled={
                  isVerifying ||
                  verifyAttempts >= OTP_MAX_VERIFY_ATTEMPTS ||
                  otpExpired
                }
                className="w-full h-12 flex items-center justify-center rounded-xl bg-linear-to-r from-[#1E72A1] to-[#3A9AD4] text-white font-semibold text-base hover:opacity-90 active:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#1E72A1] focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed">
                {isVerifying ? (
                  <div className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Verifying...</span>
                  </div>
                ) : verifyAttempts >= OTP_MAX_VERIFY_ATTEMPTS ? (
                  "Max Attempts Reached"
                ) : otpExpired ? (
                  "OTP Expired"
                ) : (
                  "Verify OTP"
                )}
              </button>

              {/* Back to Sign In Link */}
              <p className="text-center text-gray-400 text-sm">
                Back to{" "}
                <Link
                  href="/signin"
                  className="text-[#3A9AD4] hover:text-[#1E72A1] transition-colors font-medium focus:outline-none focus:underline">
                  Sign in!
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OtpContent;
