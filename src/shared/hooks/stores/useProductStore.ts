import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useProductStore = create<Product.ProductStore>()(
    immer((set) => ({
        img: "",
        title: "",
        ticket: "",
        dDay: 0,
        bookmark: "UNBOOKMARK",
        applicationNum: 0,

        setImg: (value) => {
            set(() => ({ img: value }));
        },
        setTitle: (value) => {
            set(() => ({ title: value }));
        },
        setTicket: (value) => {
            set(() => ({ ticket: value }));
        },
        upDDay: () => {
            set((state) => {
                return { dDay: state.dDay + 1 };
            });
        },
        downDDay: () => {
            set((state) => {
                if (state.dDay > 0) return { dDay: state.dDay - 1 };
            });
        },
        setBookmark: (value) => {
            set(() => ({ bookmark: value }));
        },
        upApplicationNum: () => {
            set((state) => {
                return { applicationNum: state.applicationNum + 1 };
            });
        },
        downApplicationNum: () => {
            set((state) => {
                return { applicationNum: state.applicationNum - 1 };
            });
        },
    }))
);