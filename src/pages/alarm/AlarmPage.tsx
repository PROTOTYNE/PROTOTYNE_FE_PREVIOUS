import { Header, Container } from "@/entities";

import * as Styles from "./Styles";

const AlarmPage = () => {
  return (
    <>
      <Header onBack>알림</Header>
      <div style={{ height: "65px" }}></div>
      <Container>
        <Styles.Element
          img="/image/logo.png"
          name="강민규의 시제품강민규의 시제품강민규의 시제품강민규의 시제품강민규의 시제품"
          content="당첨을 축하합니다~당첨을 축하합니다~당첨을 축하합니다~당첨을 축하합니다~당첨을 축하합니다~당첨을 축하합니다~"
          time={new Date()}
        />
        <Styles.Element
          img="/image/logo.png"
          name="강민규의 시제품"
          content="당첨을 축하합니다~"
          time={new Date()}
        />
        <Styles.Element
          img="/image/logo.png"
          name="강민규의 시제품"
          content="당첨을 축하합니다~"
          time={new Date()}
        />
      </Container>
    </>
  );
};

export default AlarmPage;
