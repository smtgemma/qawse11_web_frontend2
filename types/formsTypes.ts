export type GetInTouchResponseType = {
  success: boolean;
  message: string;
};

export type ContactFormResponseType = {
  success: boolean;
  message: string;
};

export type ConsultationFormResponseType = {
  success: boolean;
  message: string;
  data: {
    id: string;
    ip: string;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    companyName: string;
    websiteUrl: string;
    industry: string;
    monthlyMarketingBudget: string;
    primaryGoal: string;
    currentMarketingChannels: string[];
    additionalDetails: string;
  };
};
