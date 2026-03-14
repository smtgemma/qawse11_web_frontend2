import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Creates a reusable baseApi instance with common config
const envBASEURL = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : "";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: envBASEURL,
    prepareHeaders: (headers, { getState }: any) => {
      let token = "";

      if (typeof window !== "undefined") token = getState().auth.token || "";

      // Optionally: SSR cookie logic here
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: () => ({}), // Extend with injectEndpoints
  tagTypes: ["Auth", "Forms"],
});
