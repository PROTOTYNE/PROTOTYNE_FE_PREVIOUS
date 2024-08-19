import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { Button, Header } from "@/entities";
import { ReviewService } from "@/shared";

import * as Styles from "./Styles";

const ReviewPage = () => {
  const { id } = useParams();
  const { getReview } = ReviewService();

  const [multiChoiceQuestion, setMultiChoiceQuestion] = useState<string[]>([]);
  const [subjectiveQuestion, setSubjectQuestion] = useState("");

  useEffect(() => {
    (async () => {
      if (!id) return;
      const questions = await getReview(id);

      setMultiChoiceQuestion(questions.multiChoiceQuestion);
      setSubjectQuestion(questions.subjectiveQuestion);
    })();
  }, []);

  return (
    <>
      <Header onBack>후기작성</Header>
      <Styles.ScrollArea>
        {multiChoiceQuestion.map((question, index) => (
          <Styles.MultiChoiceQuestion
            key={index}
            index={index + 1}
            label={question}
          ></Styles.MultiChoiceQuestion>
        ))}
        <Styles.SubjectiveQuestion
          index={multiChoiceQuestion.length + 1}
          label={subjectiveQuestion}
        ></Styles.SubjectiveQuestion>

        <Styles.ImageQuestion index={3} label="사용한 이미지를 붙여주세요!" />
        <Styles.Repurchase />
      </Styles.ScrollArea>
      <Button>제출하기</Button>
    </>
  );
};

export default ReviewPage;
