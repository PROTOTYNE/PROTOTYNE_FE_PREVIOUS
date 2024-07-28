import { create } from "zustand";

export const useUserStore = create<User.UserStore>((set) => ({
  name: "",
  birthYear: "",
  birthMonth: "",
  birthDay: "",
  gender: "MALE",
  familyNum: 0,
  occupation: undefined,
  income: undefined,
  interests: undefined,
  familyComposition: undefined,
  productType: [],
  phone: [],
  healthStatus: undefined,

  setName: (value) => {
    set(() => ({ name: value }));
  },
  setBirthYear: (value) => {
    set(() => ({ birthYear: value }));
  },
  setBirthMonth: (value) => {
    set(() => ({ birthMonth: value }));
  },
  setBirthDay: (value) => {
    set(() => ({ birthDay: value }));
  },
  setGender: (value) => {
    set(() => ({ gender: value }));
  },
  setFamilyNum: (value) => {
    set(() => ({ familyNum: value }));
  },
  setOccupation: (value) => {
    set(() => ({ occupation: value }));
  },
  setIncome: (value) => {
    set(() => ({ income: value }));
  },
  setInterests: (value) => {
    set(() => ({ interests: value }));
  },
  setFamilyComposition: (value) => {
    set(() => ({ familyComposition: value }));
  },
  setProductType: (value) => {
    set(() => ({ productType: value }));
  },
  setPhone: (value) => {
    set(() => ({ phone: value }));
  },
  setHealthStatus: (value) => {
    set(() => ({ healthStatus: value }));
  },
}));
