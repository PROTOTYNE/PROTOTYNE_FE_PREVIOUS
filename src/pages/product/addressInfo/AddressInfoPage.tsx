import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import { Button, Header, Container } from "@/entities";
import { AuthService } from "@/shared";

const AddressInfoPage = () => {
  const [delivery, setDelivery] = useState({
    deliveryName: "",
    deliveryPhone: "",
    baseAddress: "",
    detailAddress: "",
  });

  const { getDelivery } = AuthService();

  useEffect(() => {
    getDelivery().then((data) => {
      setDelivery(data);
    });
  });

  return (
    <>
      <Header onBack>배송지 확인</Header>
      <InfoContainer>
        <Title>
          배송지 정보<span>수정하기</span>
        </Title>
        <span>{delivery.deliveryName}</span>
        <div>{delivery.deliveryPhone}</div>
        <div>{delivery.baseAddress}</div>
        <div>{delivery.detailAddress}</div>

        <div></div>
      </InfoContainer>

      <Button>체험 신청하기</Button>
    </>
  );
};

const InfoContainer = styled(Container)`
  position: absolute;
  top: 60px;
  left: 10%;

  align-items: flex-start;

  width: 80%;

  font-size: 19px;

  > span {
    font-weight: bold;
    margin-top: 10px;
  }
`;

const Title = styled.div`
  position: relative;
  font-size: 22px;
  font-weight: bold;

  width: 100%;

  margin-top: 15px;
  margin-bottom: 8px;

  > span {
    position: absolute;

    bottom: 1px;
    right: 0px;

    color: #667197;
    font-weight: lighter;
    font-size: 18px;
  }
`;

export default AddressInfoPage;
