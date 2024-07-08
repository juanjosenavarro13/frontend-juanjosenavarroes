import { User } from "./user";

export type article = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  user: User;
};
