import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useAnswersStore = create<Review.AnswersStore>()(
  immer((set) => ({
    answer1: 0,
    answer2: 0,
    answer3: 0,
    answer4: 0,
    answer5: "",
    answer6: true,
    images: [],

    setMutiChoiceAnswer: (index, answer) => {
      set((state) => {
        const key = `answer${index}`;
        state[key as keyof typeof state] = answer as never;
      });
    },
    setSubjectiveAnswer: (answer) => {
      set(() => ({
        answer5: answer,
      }));
    },
    setRepurchase: (answer) => {
      set(() => ({
        answer6: answer,
      }));
    },
    addImage: (file) => {
      set((state) => {
        if (state.images.length > 4) return;
        state.images.push(file);
      });
    },
    reset: () => {
      set(() => ({
        answer1: 0,
        answer2: 0,
        answer3: 0,
        answer4: 0,
        answer5: "",
        answer6: true,
        images: [],
      }));
    },
  }))
);
