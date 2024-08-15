//import { useParams } from "react-router";

import { Button, Header } from "@/entities";

import * as Styles from "./Styles";

const ReviewPage = () => {
  //const { id } = useParams();

  return (
    <>
      <Header onBack>후기작성</Header>
      <Styles.ScrollArea>
        <Styles.MultiChoiceQuestion
          index={1}
          label="매운 정도는 어느 정도인가?"
        ></Styles.MultiChoiceQuestion>
        <Styles.SujectiveQuestion
          index={2}
          label="매운 정도는 어느 정도인가?"
        ></Styles.SujectiveQuestion>
        <Styles.ImageQuestion index={3} label="사용한 이미지를 붙여주세요!" />
        <Styles.Repurchase />
      </Styles.ScrollArea>
      <Button>제출하기</Button>
    </>
  );
};

export default ReviewPage;
