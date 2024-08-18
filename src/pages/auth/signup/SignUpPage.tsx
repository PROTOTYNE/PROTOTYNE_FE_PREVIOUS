import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Background,
  Button,
  DisableButton,
  GrayLine,
  Header,
  LargeImage,
  MultiSelectInput,
  SelectInput,
  TwoOptionsButton,
} from "@/entities";
import { PAGE_URL, additionalInfoOptions, useUserStore } from "@/shared";

import * as Styles from "./Styles";

const SignUpPage = () => {
  const [progress, setProgress] = useState(1);
  const userStore = useUserStore((state) => state);
  const navigation = useNavigate();

  //Step 1
  const [agree1, setAgree1] = useState<boolean>(false);
  const [agree2, setAgree2] = useState<boolean>(false);

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
      <Header onBack={progress === 1}>
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
            <Styles.NameInput
              onChange={(event) => {
                userStore.setName(event.target.value);
              }}
            />
            <Styles.Ladel>생년월일</Styles.Ladel>
            <Styles.InputContainer>
              <Styles.BirthInput
                placeholder="YYYY"
                type="number"
                onChange={(event) => {
                  userStore.setBirthYear(event.target.value);
                }}
              />
              <Styles.BirthInput
                placeholder="MM"
                onChange={(event) => {
                  userStore.setBirthMonth(event.target.value);
                }}
              />
              <Styles.BirthInput
                placeholder="DD"
                onChange={(event) => {
                  userStore.setBirthDay(event.target.value);
                }}
              />
            </Styles.InputContainer>
            <Styles.Ladel>성별</Styles.Ladel>
            <Styles.InputContainer>
              {userStore.gender === "MALE" ? (
                <>
                  <Styles.SelectedGenderButton>
                    남성
                  </Styles.SelectedGenderButton>
                  <Styles.GenderButton
                    onClick={() => {
                      userStore.setGender("FEMALE");
                    }}
                  >
                    여성
                  </Styles.GenderButton>
                </>
              ) : (
                <>
                  <Styles.GenderButton
                    onClick={() => {
                      userStore.setGender("MALE");
                    }}
                  >
                    남성
                  </Styles.GenderButton>
                  <Styles.SelectedGenderButton>
                    여성
                  </Styles.SelectedGenderButton>
                </>
              )}
            </Styles.InputContainer>
            <Styles.Ladel>가구 구성원수</Styles.Ladel>
            <Styles.InputContainer>
              <div style={{ width: "calc(32% - 30px)" }}></div>
              <Styles.FamilyNumButton
                onClick={() => {
                  userStore.downFamilyNum();
                }}
              >
                -
              </Styles.FamilyNumButton>
              <Styles.FamilyNum>{userStore.familyNum}</Styles.FamilyNum>
              <Styles.FamilyNumButton
                onClick={() => {
                  userStore.upFamilyNum();
                }}
              >
                +
              </Styles.FamilyNumButton>
            </Styles.InputContainer>
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
                if (index < 4)
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
                      onChange={(newValue) => {
                        if (newValue) {
                          if (additionalInfoOption.name === "occupation")
                            userStore.setOccupation(newValue.value);
                          else if (additionalInfoOption.name === "income")
                            userStore.setIncome(newValue.value);
                          else if (
                            additionalInfoOption.name === "familyComposition"
                          )
                            userStore.setFamilyComposition(newValue.value);
                          else if (additionalInfoOption.name === "healthStatus")
                            userStore.setHealthStatus(newValue.value);
                        }
                      }}
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
                      onClick={
                        additionalInfoOption.name === "interests"
                          ? (value) => {
                              if (!userStore.interests.includes(value))
                                userStore.addInterest(value);
                              else userStore.deleteInterest(value);
                            }
                          : additionalInfoOption.name === "productTypes"
                          ? (value) => {
                              if (
                                !userStore.productTypes.includes(
                                  value as User.ProductType
                                )
                              )
                                userStore.addProductType(
                                  value as User.ProductType
                                );
                              else
                                userStore.deleteProductType(
                                  value as User.ProductType
                                );
                            }
                          : (value) => {
                              if (
                                !userStore.phones.includes(value as User.Phone)
                              )
                                userStore.addPhone(value as User.Phone);
                              else userStore.deletePhone(value as User.Phone);
                            }
                      }
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
      ) : progress === 2 &&
        !(
          userStore.name &&
          userStore.birthYear &&
          userStore.birthMonth &&
          userStore.birthDay
        ) ? (
        <DisableButton>모든 항목을 입력해주세요!</DisableButton>
      ) : progress < 3 ? (
        <Button
          onClick={() => {
            setProgress(progress + 1);
          }}
        >
          계속하기
        </Button>
      ) : (
        <TwoOptionsButton
          leftText="건너뛰기"
          rightText="가입하기"
          onClickLeft={() => {
            navigation(PAGE_URL.Home);
          }}
          OnClickRight={() => {
            console.log(userStore);
            navigation(PAGE_URL.Home);
          }}
        />
      )}
    </>
  );
};

export default SignUpPage;
