import { AxiosResponse } from "axios";

import { API } from "@/shared";

export const ReviewService = () => {
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

  const submitReview = () => {};

  return { getReview, submitReview };
};
