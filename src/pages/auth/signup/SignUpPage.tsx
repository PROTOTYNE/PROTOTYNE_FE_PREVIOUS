import { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  SignUpButton,
  Header,
  LargeImage,
  GrayLine,
  Background,
  DisableButton,
  SelectInput,
  MultiSelectInput,
} from "@/entities";
import { PAGE_URL, additionalInfoOptions } from "@/shared";

import * as Styles from "./Styles";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [agree1, setAgree1] = useState<boolean>(false);
  const [agree2, setAgree2] = useState<boolean>(false);
  const [progress, setProgress] = useState(1);

  return (
    <>
      <Background src="/background/signup.jpg" />
      {progress > 1 ? (
        <Styles.BackButton
          onClick={() => {
            setProgress(progress - 1);
          }}
        ></Styles.BackButton>
      ) : null}
      <Header>
        <span>회원 가입</span>
        <ProgressBar
          completed={progress}
          maxCompleted={3}
          labelColor="#1a0858"
          bgColor="#1a0858"
          baseBgColor="#d9d9d9"
          borderRadius="3px"
          width="345px"
          height="10px"
        />
        <div style={{ height: "20px" }}></div>
        {progress === 1 ? (
          <LargeImage src="./image/logo.png"></LargeImage>
        ) : null}
      </Header>

      <Styles.Container>
        {progress === 1 ? (
          <>
            <div style={{ height: "80px" }}></div>
            <Styles.Title>환영합니다!</Styles.Title>
            <Styles.SubTitle>
              회원 가입전 프로토타인 이용약관들을 확인해주세요.
            </Styles.SubTitle>
            <div style={{ height: "180px" }}></div>
            {agree1 && agree2 ? (
              <Styles.OnTitle>
                전체 동의
                <CheckCircleIcon
                  onClick={() => {
                    setAgree1(false);
                    setAgree2(false);
                  }}
                />
              </Styles.OnTitle>
            ) : (
              <Styles.Title>
                전체 동의
                <CheckCircleIcon
                  onClick={() => {
                    setAgree1(true);
                    setAgree2(true);
                  }}
                />
              </Styles.Title>
            )}

            <GrayLine />
            {agree1 ? (
              <Styles.OnElement>
                <span>필수</span>서비스 이용약관
                <Link to={PAGE_URL.TermsOfUse}>
                  <Styles.LinkIcon />
                </Link>
                <CheckCircleIcon
                  onClick={() => {
                    setAgree1(false);
                  }}
                />
              </Styles.OnElement>
            ) : (
              <Styles.Element>
                <span>필수</span>서비스 이용약관
                <Link to={PAGE_URL.TermsOfUse}>
                  <Styles.LinkIcon />
                </Link>
                <CheckCircleIcon
                  onClick={() => {
                    setAgree1(true);
                  }}
                />
              </Styles.Element>
            )}
            {agree2 ? (
              <Styles.OnElement>
                <span>필수</span>개인정보 수집 동의서
                <Link to={PAGE_URL.PersonalInfo}>
                  <Styles.LinkIcon />
                </Link>
                <CheckCircleIcon
                  onClick={() => {
                    setAgree2(false);
                  }}
                />
              </Styles.OnElement>
            ) : (
              <Styles.Element>
                <span>필수</span>개인정보 수집 동의서
                <Link to={PAGE_URL.PersonalInfo}>
                  <Styles.LinkIcon />
                </Link>
                <CheckCircleIcon
                  onClick={() => {
                    setAgree2(true);
                  }}
                />
              </Styles.Element>
            )}
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
            <div style={{ height: "30px" }}></div>
            <Styles.Ladel>이름</Styles.Ladel>
            <Styles.NameInput></Styles.NameInput>
            <Styles.Ladel>생년월일</Styles.Ladel>
            <Styles.InputContainer>
              <Styles.BirthInput
                placeholder="YYYY"
                type="number"
              ></Styles.BirthInput>
              <Styles.BirthInput placeholder="MM"></Styles.BirthInput>
              <Styles.BirthInput placeholder="DD"></Styles.BirthInput>
            </Styles.InputContainer>
            <Styles.Ladel>성별</Styles.Ladel>
            <Styles.InputContainer>
              <Styles.SelectedGenderInput>남성</Styles.SelectedGenderInput>
              <Styles.GenderInput>여성</Styles.GenderInput>
            </Styles.InputContainer>
            <Styles.Ladel>가구 구성원수</Styles.Ladel>
            <div style={{ height: "200px" }}></div>
          </>
        ) : (
          <>
            <Styles.Title>
              추가정보를 입력하면 <br />더 많은 시제품을 체험할 수 있어요!
            </Styles.Title>
            <Styles.SubTitle>
              기업이 체험자 선정 중 참고할 수 있는 정보입니다.
            </Styles.SubTitle>
            <Styles.ScrollArea>
              {additionalInfoOptions.map((additionalInfoOption, index) => {
                if (index < 5)
                  return (
                    <SelectInput
                      key={additionalInfoOption.name}
                      label={additionalInfoOption.label}
                      option={
                        additionalInfoOption.options as {
                          label: string;
                          value: string | number;
                        }[]
                      }
                      onChange={() => {}}
                    />
                  );
                else
                  return (
                    <MultiSelectInput
                      key={additionalInfoOption.name}
                      label={additionalInfoOption.label}
                      options={
                        additionalInfoOption.options as {
                          label: string;
                          value: string | number;
                        }[]
                      }
                      onChange={() => {}}
                    />
                  );
              })}
            </Styles.ScrollArea>
            <div style={{ height: "50px" }}></div>
          </>
        )}
      </Styles.Container>

      {progress === 1 && !(agree1 && agree2) ? (
        <DisableButton>모든 항목을 동의해주세요!</DisableButton>
      ) : (
        <SignUpButton
          onClick={() => {
            setProgress(progress + 1);
          }}
        >
          {progress < 2 ? "계속하기" : "가입하기"}
        </SignUpButton>
      )}
    </>
  );
};

export default SignUpPage;
