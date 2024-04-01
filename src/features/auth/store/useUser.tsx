import { create } from "zustand";

type User = {
  id: number;
  email: string;
};

type StoreUser = {
  user: User | undefined;
  setUser: (user: User) => void;
};

export const useStoreUser = create<StoreUser>((set) => ({
  user: undefined,
  setUser: (user: User) => set(() => ({ user })),
}));
