import { AxiosResponse } from "axios";

import { API, FORMAPI, useAnswersStore } from "@/shared";

export const ReviewService = () => {
  const store = useAnswersStore((state) => state);

  const getReview = async (id: string) => {
    const {
      data: { result },
    } = (await API.get(
      `/review/${id}`
    )) as AxiosResponse<Review.GetReviewResDto>;

    const questions: string[] = [];

    for (const key in result) {
      if (result[key as keyof typeof result] && key !== "question5") {
        questions.push(result[key as keyof typeof result] as string);
      }
    }

    return {
      multiChoiceQuestion: questions,
      subjectiveQuestion: result.question5 as string,
    };
  };

  const submitReview = async (id: string) => {
    //text
    await API.put(`/review/text/${id}`, {
      answer1: store.answer1,
      answer2: store.answer2,
      answer3: store.answer3,
      answer4: store.answer4,
      answer5: store.answer5,
      answer6: store.answer6,
    });

    //img
    const formData = new FormData();
    store.images.forEach((file, index) => {
      formData.append(`image${index}`, file);
    });

    await FORMAPI.post(`/review/image/${id}`, formData);
  };

  return { getReview, submitReview };
};
