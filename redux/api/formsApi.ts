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
      { name: string; email: string; msg: string; projectType: string }
    >({
      query: (body) => ({
        url: "/form/send-booking",
        method: "POST",
        body: {
          name: body.name?.trim() || "",
          email: body.email.trim(),
          msg: body.msg.trim(),
          projectType: body.projectType.trim(),
        },
      }),
      invalidatesTags: ["Forms"],
    }),

    contact: build.mutation<
      ContactFormResponseType,
      {
        firstName: string;
        lastName: string;
        email: string;
        company: string;
        country: string;
        projectType: string;
        budgetRange: string;
        message: string;
      }
    >({
      query: (body) => ({
        url: "/auth/send-support-mail",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Forms"],
    }),

    consultation: build.mutation<
      ConsultationFormResponseType,
      {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber?: string;
        companyName: string;
        websiteUrl?: string;
        industry?: string;
        monthlyMarketingBudget: string;
        primaryGoal: string;
        currentMarketingChannels: string[];
        additionalDetails?: string;
        ip?: string;
      }
    >({
      query: (body) => ({
        url: "/form/create-form",
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
