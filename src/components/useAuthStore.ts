import { create } from 'zustand';

type AuthStore = {
  isFirstTime: boolean;
  setIsFirstTime: (value: boolean) => void;
};
export const useAuthStore = create<AuthStore>((set) => ({
  isFirstTime: true,
  setIsFirstTime: (value) => set({ isFirstTime: value }),
}));
