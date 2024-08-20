import { useParams, useNavigate } from "react-router";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import {
  Button,
  Header,
  Container,
  DisableButton,
  ApplyComplete,
} from "@/entities";
import { AuthService, ProductService, PAGE_URL } from "@/shared";

const AddressInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isCompleteModalVisible, setIsCompleteModalVisible] = useState(false);

  const [delivery, setDelivery] = useState<User.Delivery>({
    deliveryName: null,
    deliveryPhone: null,
    baseAddress: null,
    detailAddress: null,
  });

  const { getDelivery } = AuthService();
  const { application } = ProductService();

  useEffect(() => {
    getDelivery().then((data) => {
      setDelivery(data);
    });
  });

  return (
    <>
      <Header onBack>배송지 확인</Header>
      <InfoContainer>
        {delivery.baseAddress &&
        delivery.deliveryName &&
        delivery.deliveryPhone &&
        delivery.detailAddress ? (
          <>
            <Title>
              배송지 정보
              <span
                onClick={() => {
                  navigate(PAGE_URL.Address);
                }}
              >
                수정하기
              </span>
            </Title>
            <span>{delivery.deliveryName}</span>
            <div>{delivery.deliveryPhone}</div>
            <div>{delivery.baseAddress}</div>
            <div>{delivery.detailAddress}</div>
            <Button
              onClick={() => {
                if (!id) return;
                application(id).then(() => {
                  setIsCompleteModalVisible(true);
                });
              }}
            >
              체험 신청하기
            </Button>
            <ApplyComplete
              visible={isCompleteModalVisible}
              onClose={() => {
                navigate("/product/" + id);
              }}
              onSelectAddress={() => {
                navigate(PAGE_URL.My);
              }}
            />
          </>
        ) : (
          <>
            <Title>
              배송지 정보<span>입력하기</span>
            </Title>
            <span>입력된 배송지가 없습니다.</span>
            <DisableButton>배송지를 입력해주세요!</DisableButton>
          </>
        )}
      </InfoContainer>
    </>
  );
};

const InfoContainer = styled(Container)`
  position: absolute;
  top: 60px;
  left: 5%;

  align-items: flex-start;

  width: 90%;

  font-size: 18px;

  color: #545454;

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

  color: black;

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
