export type Inputs = {
  email: string;
  password: string;
};

export type ResponseLogin = {
  access_token: string;
  user: {
    id: number;
    email: string;
  };
};
