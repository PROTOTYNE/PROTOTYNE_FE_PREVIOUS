import { create } from "zustand";

export const useUserStore = create<User.UserStore>(() => ({
  //State
  isSignIn: false,
}));
