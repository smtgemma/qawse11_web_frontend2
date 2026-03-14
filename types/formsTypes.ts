export type GetInTouchResponseType = {
  success: boolean;
  message: string;
  data: {
    id: string;
    userId: string;
    type: "GET_IN_TOUCH";
    data: {
      name: string;
      email: string;
      message: string;
    };
    ip: string;
    createdAt: string;
  };
};

export type ContactFormResponseType = {
  success: boolean;
  message: string;
  data: {
    id: string;
    userId: string;
    type: "CONTACT";
    data: {
      first_name: string;
      last_name: string;
      email: string;
      company_name: string;
      country: string;
      project_type: string;
      budget_range: string;
      message: string;
    };
    ip: string;
    createdAt: string;
  };
};

export type ConsultationFormResponseType = {
  success: boolean;
  message: string;
  data: {
    id: string;
    userId: string;
    type: "CONSULTATION";
    data: {
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
    };
    ip: string;
    createdAt: string;
  };
};
