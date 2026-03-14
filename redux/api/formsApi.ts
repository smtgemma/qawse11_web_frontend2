import { baseApi } from "./baseApi";
import {
  ConsultationFormResponseType,
  ContactFormResponseType,
  GetInTouchResponseType,
} from "@/types/formsTypes";

export const formsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getInTouch: build.mutation<
      GetInTouchResponseType,
      { name: string; email: string; message: string }
    >({
      query: (body) => ({
        url: "/getInTouch",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Forms"],
    }),

    contact: build.mutation<
      ContactFormResponseType,
      {
        first_name: string;
        last_name: string;
        email: string;
        company_name: string;
        country: string;
        project_type: string;
        budget_range: string;
        message: string;
      }
    >({
      query: (body) => ({
        url: "/contact",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Forms"],
    }),

    consultation: build.mutation<
      ConsultationFormResponseType,
      {
        first_name: string;
        last_name: string;
        email: string;
        company_name: string;
        timeline: string;
        country: string;
        project_type: string;
        budget_range: string;
        helps: string[];
        project_details: string;
      }
    >({
      query: (body) => ({
        url: "/consultation",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Forms"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useContactMutation,
  useGetInTouchMutation,
  useConsultationMutation,
} = formsApi;
