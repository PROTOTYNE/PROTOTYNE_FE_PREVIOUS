import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Background, Header } from "@/entities";
import {
  useUserStore,
  additionalInfoOptions,
  PAGE_URL,
  AuthService,
} from "@/shared";

import * as Styles from "./Styles";

const MyInfo = () => {
  const navigate = useNavigate();

  const name = useUserStore((state) => state.name);
  const birthYear = useUserStore((state) => state.birthYear);
  const birthMonth = useUserStore((state) => state.birthMonth);
  const birthDay = useUserStore((state) => state.birthDay);
  const gender = useUserStore((state) => state.gender);
  const familyNum = useUserStore((state) => state.familyNum);
  const state = useUserStore((state) => state);

  const { getUserInfo, getDelivery } = AuthService();

  const [delivery, setDelivery] = useState<User.Delivery>({
    deliveryName: null,
    deliveryPhone: null,
    baseAddress: null,
    detailAddress: null,
  });

  useEffect(() => {
    getDelivery().then((data) => {
      setDelivery(data);
    });
  }, []);

  useEffect(() => {
    (async () => {
      await getUserInfo();
    })();
  }, []);

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
              navigate(PAGE_URL.EditMyInfo);
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
              navigate(PAGE_URL.EditMyAddionalInfo);
            }}
          >
            수정하기
          </span>
        </Styles.Title>
        <Styles.AdditionalInfoContainer>
          <Styles.SubTitle>
            추가정보를 입력하면 더 많은 시제품 체험 대상자로 <br /> 선정될 수
            있습니다.
          </Styles.SubTitle>
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
              <Styles.MultiInfo key={additionalInfoOption.name}>
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
          배송지 정보
          <span
            onClick={() => {
              navigate(PAGE_URL.Address);
            }}
          >
            수정하기
          </span>
        </Styles.Title>
        <Styles.InfoContianer>
          <Styles.Address>
            {delivery.baseAddress &&
            delivery.deliveryName &&
            delivery.deliveryPhone &&
            delivery.detailAddress ? (
              <>
                <span>{delivery.deliveryName}</span>
                <div>{delivery.deliveryPhone}</div>
                <div>{delivery.baseAddress}</div>
                <div>{delivery.detailAddress}</div>
              </>
            ) : (
              <span> 배송지를 아직 입력하지 않았습니다.</span>
            )}
          </Styles.Address>
        </Styles.InfoContianer>
      </Styles.TopContainer>
    </>
  );
};

export default MyInfo;
