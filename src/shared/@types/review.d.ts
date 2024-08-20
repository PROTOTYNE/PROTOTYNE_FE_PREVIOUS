declare namespace Review {
  interface Object {
    [key: string]: string | null;
  }

  export interface GetReviewResDto {
    result: {
      question1: string | null; //객관식
      question2: string | null;
      question3: string | null;
      question4: string | null;
      question5: string | null; //주관식
    };
  }

  export interface Answers {
    answer1: number; //객관식
    answer2: number;
    answer3: number;
    answer4: number;
    answer5: string; //주관식
    answer6: boolean; //재사용 유무
    images: File[];
  }

  export interface AnswersStore extends Answers {
    setMutiChoiceAnswer: (index: number, answer: number) => void;
    setSubjectiveAnswer: (answer: string) => void;
    setRepurchase: (answer: boolean) => void;
    addImage: (file: File) => void;
    reset: () => void;
  }
}
