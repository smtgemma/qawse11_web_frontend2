"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { useAppSelector } from "@/redux/hooks";
import SuccessContent from "../SuccessContent";
import { toast } from "sonner";

// Zod Schema for Form Validation
const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

// Reusable Input Component with Error Handling
interface InputFieldProps {
  label: string;
  type?: string;
  id: string;
  placeholder?: string;
  error?: string;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void;
  showPassword?: boolean;
  register: any;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  id,
  placeholder,
  error,
  showPasswordToggle = false,
  onTogglePassword,
  showPassword = false,
  register,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block text-sm text-white/70 mb-2 font-normal">
        {label}
      </label>
      <div className="relative">
        <input
          type={
            showPasswordToggle ? (showPassword ? "text" : "password") : type
          }
          id={id}
          placeholder={placeholder}
          {...register}
          className={`w-full h-12 px-3 py-[13px] bg-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all backdrop-blur-sm ${
            error
              ? "ring-2 ring-red-500 focus:ring-red-500"
              : "focus:ring-[#1E72A1]"
          }`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
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

// Password Strength Indicator Component
interface PasswordStrengthProps {
  password: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthProps> = ({
  password,
}) => {
  const getPasswordStrength = (
    pass: string
  ): { strength: number; label: string; color: string; bgColor: string } => {
    if (pass.length === 0)
      return { strength: 0, label: "", color: "", bgColor: "" };

    let strength = 0;
    if (pass.length >= 8) strength++;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++;
    if (/\d/.test(pass)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pass)) strength++;

    if (strength <= 1)
      return {
        strength: 1,
        label: "Weak",
        color: "text-[#FF7878]",
        bgColor: "bg-[#FF7878]",
      };
    if (strength <= 2)
      return {
        strength: 2,
        label: "Medium",
        color: "text-[#FFCC5D]",
        bgColor: "bg-[#FFCC5D]",
      };
    return {
      strength: 3,
      label: "Strong",
      color: "text-[#78FF88]",
      bgColor: "bg-[#78FF88]",
    };
  };

  const { strength, label, color, bgColor } = getPasswordStrength(password);

  if (strength === 0) return null;

  return (
    <div className="mt-3 space-y-2">
      <div className="flex gap-2">
        <div
          className={`h-1 flex-1 rounded-full transition-colors ${
            strength >= 1 ? bgColor : "bg-gray-700"
          }`}></div>
        <div
          className={`h-1 flex-1 rounded-full transition-colors ${
            strength >= 2 ? bgColor : "bg-gray-700"
          }`}></div>
        <div
          className={`h-1 flex-1 rounded-full transition-colors ${
            strength >= 3 ? bgColor : "bg-gray-700"
          }`}></div>
      </div>
      <div className="flex items-center justify-end gap-1.5 text-sm">
        <span className={`${color} font-normal`}>{label}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-gray-400">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 11V8M8 5H8.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

// Main Component
const ResetPasswordContent: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { otpPurposeData } = useAppSelector((state) => state.auth);
  const [resetAction, { isLoading }] = useResetPasswordMutation();
  const [isVarified, setIsVerified] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password", "");

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      if (!otpPurposeData?.email || !otpPurposeData?.otp) {
        throw new Error("OTP context missing");
      }

      const { email, otp } = otpPurposeData;

      const res = await resetAction({
        email,
        otp,
        newPassword: data.password,
        confirmPassword: data.confirmPassword,
      }).unwrap();

      if (res.success) {
        setIsVerified(true);
      }
    } catch (error: any) {
      console.error("Password reset error:", error);
      toast.error(error.data.message);
    }
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
              src="/images/auth.png"
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
            title="Password reset successfully!"
            sub_title="Your password has been securely updated"
          />
        ) : (
          <div className="w-full lg:w-auto lg:max-w-[450px] shrink-0">
            {/* Logo */}
            <div className="mb-8">
              <CompanyLogo />
            </div>

            {/* Title */}
            <h2 className="text-[32px] lg:text-[36px] font-semibold text-white mb-4 leading-tight">
              Reset Your Password
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 text-sm mb-8">
              Please enter your new password below.
            </p>

            {/* Form */}
            <div className="space-y-6">
              {/* New Password */}
              <InputField
                label="New Password"
                id="password"
                placeholder="••••••••"
                error={errors.password?.message}
                showPasswordToggle
                showPassword={showPassword}
                onTogglePassword={() => setShowPassword(!showPassword)}
                register={register("password")}
              />

              {/* Confirm Password with Strength Indicator */}
              <div>
                <InputField
                  label="Confirm Password"
                  id="confirmPassword"
                  placeholder="••••••••"
                  error={errors.confirmPassword?.message}
                  showPasswordToggle
                  showPassword={showConfirmPassword}
                  onTogglePassword={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  register={register("confirmPassword")}
                />
                <PasswordStrengthIndicator password={password} />
              </div>

              {/* Reset Password Button */}
              <button
                onClick={handleSubmit(onSubmit)}
                disabled={isLoading}
                className="w-full h-12 flex items-center justify-center rounded-xl bg-linear-to-r from-[#1E72A1] to-[#3A9AD4] text-white font-semibold text-base hover:opacity-90 active:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#1E72A1] focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? (
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
                    <span>Resetting Password...</span>
                  </div>
                ) : (
                  "Reset Password"
                )}
              </button>

              {/* Back to Sign In Link */}
              <p className="text-center text-gray-400 text-sm">
                Back to{" "}
                <a
                  href="#signin"
                  className="text-[#3A9AD4] hover:text-[#1E72A1] transition-colors font-medium focus:outline-none focus:underline">
                  Sign in!
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordContent;
