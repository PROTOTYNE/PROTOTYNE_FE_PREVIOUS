import { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import { Button, Header, LargeImage } from "@/entities";
import { PAGE_URL } from "@/shared";

import * as Styles from "./Styles";

const SignUpPage = () => {
  const [progress, setProgress] = useState(1);

  return (
    <>
      <Header>
        약관 동의
        <ProgressBar
          completed={progress}
          maxCompleted={3}
          labelColor="#6482EB"
          bgColor="#6482EB"
          baseBgColor="#d9d9d9"
          borderRadius="3px"
          width="345px"
          height="10px"
        />
      </Header>

      <Styles.Container>
        {progress === 1 ? (
          <>
            <LargeImage src="./image/logo.jpg"></LargeImage>
            <Styles.Title>환영합니다!</Styles.Title>
            <Styles.SubTitle>
              회원 가입전 프로토타인 이용약관들을 확인해주세요.
            </Styles.SubTitle>
            <Styles.Title>전체 동의</Styles.Title>
            <Styles.StyledLink to={PAGE_URL.TermsOfUse}>
              <span>필수</span>서비스 이용약관
              <Styles.LinkIcon />
            </Styles.StyledLink>
            <Styles.StyledLink to={PAGE_URL.PersonalInfo}>
              <span>필수</span>개인정보 수집 동의서
              <Styles.LinkIcon />
            </Styles.StyledLink>
          </>
        ) : progress === 2 ? (
          <>
            <Styles.Title>
              시제품 체험 신청을 하기 위해서는 <br />
              기본정보가 필요해요!
            </Styles.Title>
            <Styles.SubTitle>
              기업이 체험 신청자를 확인하기 위해서 사용되는 <br />
              필수로 입력해야 하는 정보입니다.
            </Styles.SubTitle>
            <Styles.Ladel>이름</Styles.Ladel>
            <Styles.Ladel>생년월일</Styles.Ladel>
            <Styles.Ladel>성별</Styles.Ladel>
            <Styles.Ladel>가구 구성원수</Styles.Ladel>
          </>
        ) : (
          <>
            <Styles.Title>
              추가정보를 입력하면 <br />더 많은 시제품을 체험할 수 있어요!
            </Styles.Title>
            <Styles.SubTitle>
              기업이 체험자 선정 중 참고할 수 있는 정보입니다.
            </Styles.SubTitle>
            <Styles.Ladel>직업</Styles.Ladel>
          </>
        )}
      </Styles.Container>

      <Button
        onClick={() => {
          setProgress(progress + 1);
        }}
      >
        {progress < 2 ? "계속하기" : "가입하기"}
      </Button>
    </>
  );
};

export default SignUpPage;
