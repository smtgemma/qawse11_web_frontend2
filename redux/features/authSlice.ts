import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  otpPurposeData: {
    email?: string;
    purpose?: "VERIFY" | "RESET";
    otp?: string;
  } | null;
}

const initialState: AuthState = {
  token: null,
  otpPurposeData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setOtpPurpose: (
      state,
      action: PayloadAction<{
        email?: string;
        purpose?: "VERIFY" | "RESET";
        otp?: string;
      }>
    ) => {
      state.otpPurposeData = {
        ...state.otpPurposeData,
        ...action.payload,
      };
    },

    setCredentials: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },

    logout: (state) => {
      state.token = null;
    },
  },
});

export const { setOtpPurpose, setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
