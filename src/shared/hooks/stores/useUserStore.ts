import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useUserStore = create<User.UserStore>()(
  immer((set, get) => ({
    //State
    name: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    gender: "MALE",
    familyNum: 1,
    occupation: undefined,
    income: undefined,
    interests: [],
    familyComposition: undefined,
    productTypes: [],
    phones: [],
    healthStatus: undefined,

    //Set Function
    setUserAllInfo: (value) => {
      set((state) => {
        for (const key in value) {
          if (value[key as keyof typeof value]) {
            state[key as keyof typeof state] = value[
              key as keyof typeof value
            ] as never;
          }
        }
      });
    },
    getUserAllInfo: () => ({
      name: get().name,
      birthYear: get().birthYear,
      birthMonth: get().birthMonth,
      birthDay: get().birthDay,
      gender: get().gender,
      familyNum: get().familyNum,
      occupation: get().occupation,
      income: get().income,
      interests: get().interests,
      familyComposition: get().familyComposition,
      productTypes: get().productTypes,
      phones: get().phones,
      healthStatus: get().healthStatus,
    }),
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
