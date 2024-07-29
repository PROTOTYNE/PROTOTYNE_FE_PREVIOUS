import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { ClipLoader } from "react-spinners";

import {
  Background,
  MidContainer,
  MidPointLine,
  BottomImage,
} from "@/entities";

import * as Styles from "./Styles";

export const FirstLoading = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show ? (
        <Container>
          <Background src="/background/first_loading.jpg" />
          <MidContainer>
            <div style={{ height: "150px" }}></div>
            <Styles.Title>
              <Styles.LgText>앞서가는 당신을 위한</Styles.LgText>
              <Styles.LgText>특별한 기회</Styles.LgText>
              <Styles.XlText>Prototyne.</Styles.XlText>
              <MidPointLine />
            </Styles.Title>
            <div style={{ height: "60px" }}></div>
            <ClipLoader color="white" />
          </MidContainer>
          <BottomImage src="/image/small_logo.png" />
        </Container>
      ) : null}
    </>
  );
};

const Container = styled.div`
  z-index: 100;
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100vh;
`;
