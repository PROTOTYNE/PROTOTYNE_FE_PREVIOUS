import { useNavigate } from "react-router";

import { Background, Header } from "@/entities";
import { useUserStore, additionalInfoOptions, PAGE_URL } from "@/shared";

import * as Styles from "./Styles";

const MyInfo = () => {
  const navigation = useNavigate();

  const name = useUserStore((state) => state.name);
  const birthYear = useUserStore((state) => state.birthYear);
  const birthMonth = useUserStore((state) => state.birthMonth);
  const birthDay = useUserStore((state) => state.birthDay);
  const gender = useUserStore((state) => state.gender);
  const familyNum = useUserStore((state) => state.familyNum);
  const state = useUserStore((state) => state);

  return (
    <>
      <Header onBack styled>
        내 정보 관리
      </Header>
      <Background src="/background/signup.jpg" />
      <Styles.TopContainer>
        <div style={{ height: "30px" }}></div>
        <Styles.Name>
          <span>{name}</span>
        </Styles.Name>
        <Styles.Title>
          개인 정보
          <span
            onClick={() => {
              navigation(PAGE_URL.EditMyInfo);
            }}
          >
            수정하기
          </span>
        </Styles.Title>
        <Styles.InfoContianer>
          <Styles.Info>
            생년월일
            <span>
              {birthYear}.{birthMonth}.{birthDay}
            </span>
          </Styles.Info>
          <Styles.Info>
            성별
            <span>{gender === "MALE" ? "남자" : "여성"}</span>
          </Styles.Info>
          <Styles.Info>
            가구 구성원 수<span>{familyNum}인 가구</span>
          </Styles.Info>
        </Styles.InfoContianer>
        <Styles.Title>
          추가 정보
          <span
            onClick={() => {
              navigation(PAGE_URL.EditMyAddionalInfo);
            }}
          >
            수정하기
          </span>
        </Styles.Title>
        <Styles.AdditionalInfoContainer>
          <Styles.SubTitle>
            추가정보를 입력하면 더 많은 시제품 체험 대상자로
          </Styles.SubTitle>
          <Styles.SubTitle>선정될 수 있습니다.</Styles.SubTitle>
          <div style={{ height: "5px" }}></div>
          {additionalInfoOptions.map((additionalInfoOption, index) =>
            index < 4 ? (
              <Styles.Info key={additionalInfoOption.name}>
                {additionalInfoOption.label}
                <span>
                  {state[additionalInfoOption.name]
                    ? additionalInfoOption.options.find(
                        (option) =>
                          option.value === state[additionalInfoOption.name]
                      )?.label
                    : "입력된 정보가 없습니다."}
                </span>
              </Styles.Info>
            ) : (
              <Styles.MultiInfo>
                {additionalInfoOption.label}
                <span>
                  {(state[additionalInfoOption.name] as string[]).length
                    ? (state[additionalInfoOption.name] as string[]).map(
                        (value, index) => (
                          <span key={value}>
                            {index !== 0 ? " / " : null}
                            {
                              additionalInfoOption.options.find(
                                (option) => option.value === value
                              )?.label
                            }
                          </span>
                        )
                      )
                    : "입력된 정보가 없습니다."}
                </span>
              </Styles.MultiInfo>
            )
          )}
        </Styles.AdditionalInfoContainer>
        <Styles.Title>
          배송지 정보<span>수정하기</span>
        </Styles.Title>
        <Styles.InfoContianer></Styles.InfoContianer>
      </Styles.TopContainer>
    </>
  );
};

export default MyInfo;
