import { LoginResponseType } from "@/types/authTypes";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<
      LoginResponseType,
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),

    signUp: build.mutation<
      { success: boolean; message: string },
      { fullName: string; email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/users/register",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),

    sendOtp: build.mutation<
      { success: boolean; message: string },
      { email: string; purpose: "VERIFY" | "RESET" }
    >({
      query: (credentials) => ({
        url: "/auth/send-otp",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),

    resendOtp: build.mutation<
      { success: boolean; message: string },
      { email: string; purpose: "VERIFY" | "RESET" }
    >({
      query: (credentials) => ({
        url: "/auth/resend-otp",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),

    verifyOtp: build.mutation<
      LoginResponseType,
      { email: string; otp: string; purpose: "VERIFY" | "RESET" }
    >({
      query: (credentials) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),

    forgotPassword: build.mutation<
      { success: boolean; message: string },
      { email: string }
    >({
      query: (credentials) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),

    resetPassword: build.mutation<
      { success: boolean; message: string },
      {
        newPassword: string;
        confirmPassword: string;
      }
    >({
      query: (credentials) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),

    refreshToken: build.mutation<LoginResponseType, { token: string }>({
      query: ({ token }) => ({
        url: "/auth/refresh-token",
        method: "POST",
        headers: {
          refreshToken: token,
        },
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useSendOtpMutation,
  useResendOtpMutation,
  useVerifyOtpMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
} = authApi;
