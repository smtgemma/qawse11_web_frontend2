"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import Link from "next/link";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { useForgotPasswordMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setOtpPurpose } from "@/redux/features/authSlice";
import { toast } from "sonner";

// Zod Schema for Form Validation
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

// Reusable Input Component with Error Handling
interface InputFieldProps {
  label: string;
  type?: string;
  id: string;
  placeholder?: string;
  error?: string;
  register: any;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  id,
  placeholder,
  error,
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
          type={type}
          id={id}
          placeholder={placeholder}
          {...register}
          className={`w-full h-12 px-3 py-[13px] bg-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all backdrop-blur-sm ${
            error
              ? "ring-2 ring-red-500 focus:ring-red-500"
              : "focus:ring-purple-500"
          }`}
        />
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
const ForgetPasswordContent: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [forgotAction, { isLoading }] = useForgotPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      const res = await forgotAction({ email: data.email }).unwrap();

      if (res.success) {
        dispatch(
          setOtpPurpose({
            email: data.email,
            purpose: "RESET",
          })
        );
        router.push("/otp");
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
        <div className="w-full lg:w-auto lg:max-w-[450px] shrink-0">
          {/* Logo */}
          <div className="mb-8">
            <CompanyLogo />
          </div>

          {/* Title */}
          <h2 className="text-[32px] lg:text-[36px] font-semibold text-white mb-4 leading-tight">
            Forgot Password?
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-sm mb-8">
            Enter your email address and we&apos;ll send you a reset OTP to your
            email address.
          </p>

          {/* Form */}
          <div className="space-y-6">
            {/* Email */}
            <InputField
              label="Email address"
              type="email"
              id="email"
              placeholder="jonsnow464@gmail.com"
              error={errors.email?.message}
              register={register("email")}
            />

            {/* Send Reset Link Button */}
            <button
              onClick={handleSubmit(onSubmit)}
              disabled={isLoading}
              className="w-full h-12 flex items-center justify-center rounded-xl bg-linear-to-r from-[#6C03FF] to-[#9A3DFF] text-white font-semibold text-base hover:opacity-90 active:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed">
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
                  <span>Sending OTP...</span>
                </div>
              ) : (
                "Send OTP"
              )}
            </button>

            {/* Back to Sign In Link */}
            <p className="text-center text-gray-400 text-sm">
              Remember your password?{" "}
              <Link
                href="/signin"
                className="text-[#9A3DFF] hover:text-[#6C03FF] transition-colors font-medium focus:outline-none focus:underline">
                Sign in!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordContent;
