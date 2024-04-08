export type Inputs = {
  email: string;
  password: string;
};

export type ResponseLogin = {
  token: string;
  user: {
    id: number;
    email: string;
  };
};
