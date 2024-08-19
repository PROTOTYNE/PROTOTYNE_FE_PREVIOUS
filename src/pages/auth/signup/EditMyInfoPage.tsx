import { useNavigate } from "react-router";

import { Background, Header, Button } from "@/entities";
import { useUserStore, AuthService, PAGE_URL } from "@/shared";

import * as Styles from "./Styles";

const EditMyInfoPage = () => {
  const navigate = useNavigate();

  const userStore = useUserStore((state) => state);

  const { updateBasicInfo } = AuthService();

  return (
    <>
      <Background src="/background/signup.jpg" />
      <Header onBack>기본 정보 수정</Header>
      <Styles.Container>
        <Styles.Ladel>생년월일</Styles.Ladel>
        <Styles.InputContainer>
          <Styles.BirthInput
            placeholder={userStore.birthYear}
            type="number"
            onChange={(event) => {
              userStore.setBirthYear(event.target.value);
            }}
          />
          <Styles.BirthInput
            placeholder={userStore.birthMonth}
            onChange={(event) => {
              userStore.setBirthMonth(event.target.value);
            }}
          />
          <Styles.BirthInput
            placeholder={userStore.birthDay}
            onChange={(event) => {
              userStore.setBirthDay(event.target.value);
            }}
          />
        </Styles.InputContainer>
        <Styles.Ladel>성별</Styles.Ladel>
        <Styles.InputContainer>
          {userStore.gender === "MALE" ? (
            <>
              <Styles.SelectedGenderButton>남성</Styles.SelectedGenderButton>
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
              <Styles.SelectedGenderButton>여성</Styles.SelectedGenderButton>
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
        <Styles.SubTitle>
          정보가 정확하지 않을 시 불이익이 있을 수 있습니다.
        </Styles.SubTitle>
        <Styles.SubTitle>
          개인 정보 수정은 6개월에 한 번만 가능합니다.
        </Styles.SubTitle>
        <div style={{ height: "300px" }}></div>
      </Styles.Container>
      <Button
        onClick={() => {
          updateBasicInfo();
          navigate(PAGE_URL.MyInfo);
        }}
      >
        저장하기
      </Button>
    </>
  );
};

export default EditMyInfoPage;
