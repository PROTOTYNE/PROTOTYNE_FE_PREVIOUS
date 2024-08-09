import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useUserStore = create<User.UserStore>()(
  immer((set) => ({
    //State
    name: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    gender: "MALE",
    familyNum: 0,
    occupation: undefined,
    income: undefined,
    interests: [],
    familyComposition: undefined,
    productTypes: [],
    phones: [],
    healthStatus: undefined,

    //Set Function
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
    upFamilyNum: () => {
      set((state) => {
        if (state.familyNum < 5) return { familyNum: state.familyNum + 1 };
      });
    },
    downFamilyNum: () => {
      set((state) => {
        if (state.familyNum > 0) return { familyNum: state.familyNum - 1 };
      });
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
    addInterest: (value) => {
      set((state) => {
        state.interests.push(value);
      });
    },
    deleteInterest: (value) => {
      set((state) => {
        const index = state.interests.indexOf(value);
        if (index > -1) state.interests.splice(index, 1);
      });
    },
    setFamilyComposition: (value) => {
      set(() => ({ familyComposition: value }));
    },
    setProductTypes: (value) => {
      set(() => ({ productType: value }));
    },
    addProductType: (value) => {
      set((state) => {
        state.productTypes.push(value);
      });
    },
    deleteProductType: (value) => {
      set((state) => {
        const index = state.productTypes.indexOf(value);
        if (index > -1) state.productTypes.splice(index, 1);
      });
    },
    setPhones: (value) => {
      set(() => ({ phone: value }));
    },
    addPhone: (value) => {
      set((state) => {
        state.phones.push(value);
      });
    },
    deletePhone: (value) => {
      set((state) => {
        const index = state.phones.indexOf(value);
        if (index > -1) state.phones.splice(index, 1);
      });
    },
    setHealthStatus: (value) => {
      set(() => ({ healthStatus: value }));
    },
  }))
);
