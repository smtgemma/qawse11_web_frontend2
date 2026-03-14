export type LoginResponseType = {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
  };
};
