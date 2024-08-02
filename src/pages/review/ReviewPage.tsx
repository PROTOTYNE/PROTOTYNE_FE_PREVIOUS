import { useParams } from "react-router";

import { Button, Header } from "@/entities";

import * as Styles from "./Styles";

const ReviewPage = () => {
  const { id } = useParams();

  return (
    <>
      <Header onBack>후기작성</Header>
      <Styles.ScrollArea>
        <></>
      </Styles.ScrollArea>
      <Button>제출하기</Button>
    </>
  );
};

export default ReviewPage;
