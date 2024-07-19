import { create } from "zustand";

export type UserStore = {
  id: number;
  email: string;
  token: string;
};

type StoreUser = {
  user: UserStore | undefined;
  setUser: (user: UserStore) => void;
};

export const useStoreUser = create<StoreUser>((set) => ({
  user: undefined,
  setUser: (user: UserStore) => set(() => ({ user })),
}));
