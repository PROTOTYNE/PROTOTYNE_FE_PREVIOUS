import styled from "@emotion/styled";
import React from "react";

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Rectangle = styled.div<{ color: string }>`
  width: 71px;
  height: 71px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  margin-right: 10px;
`;

const ProductName = styled.span<{ status: "종료" | string }>`
  font-weight: bold;
  color: ${(props) =>
    props.status === "완료"
      ? "black"
      : props.status === "패널티"
      ? "red"
      : "inherit"};
`;

const Details = styled.span`
  color: #3d3d3d;
  font-size: 13px;
  font-weight: 500;
  display: block;
`;

const Announcement = styled.span`
  font-size: 12pt;
  font-weight: 500;
  margin-right: 5px;
`;

const StatusText = styled.span`
  font-size: 15pt;
  font-weight: bold;
  margin-left: 5px;
`;

const ResultAnnouncement = styled.span`
  color: #3d3d3d;
  font-size: 13px;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  width: 79px;
  height: 24px;
  background-color: #24446b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
`;

const ButtonText = styled.span`
  color: white;
  font-weight: 600;
  font-size: 15px;
`;

const Divider = styled.div`
  border-bottom: 1px solid #ccc;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  color: black;
  border: 1px solid black;
  padding: 5px 10px;
  cursor: pointer;
`;

const ReviewPeriod = styled.span`
  color: #3d3d3d;
  font-size: 13px;
  font-weight: 500;
  display: block;
  margin-top: 5px;
`;

const ShippingContainer = styled.div`
  display: flex;
  width: 162px;
  height: 33px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  overflow: hidden;
`;

const ShippingStatus = styled.div<{
  status: "배송 준비중" | "배송중" | "배송 완료";
}>`
  width: 50%;
  background-color: ${(props) =>
    props.status === "배송 준비중"
      ? "#F8D7DA"
      : props.status === "배송중"
      ? "#FFF3CD"
      : "#D4EDDA"};
  color: ${(props) =>
    props.status === "배송 준비중"
      ? "#721C24"
      : props.status === "배송중"
      ? "#856404"
      : "#155724"};
  font-size: 15pt;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const ShippingInfo = styled.div`
  width: 50%;
  background-color: #24446b;
  color: white;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const ShippingDetails = styled.div`
  color: #3d3d3d;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  margin-top: 5px;
`;

// ProductItem Component -> 여기 주석처리 하기 //
interface ProductItemProps {
  productName: string;
  color?: string;
  applicationDate: string;
  announcementDate?: {
    daysLeft: number;
    status: "당첨" | "미당첨" | null;
  } | null;
  status: "신청" | "진행중" | "당첨" | "종료";
  shippingStatus?: "배송 준비중" | "배송중" | "배송 완료";
}

const ProductItem: React.FC<ProductItemProps> = ({
  productName,
  color = "#D9D9D9",
  applicationDate,
  announcementDate,
  status,
  shippingStatus,
}) => {
  const isExpired = announcementDate && announcementDate.daysLeft <= 0;
  const reviewPeriod = "07.02~07.23";

  return (
    <Container>
      <Rectangle color={color} />
      <div>
        <ProductName status={status}>
          {status === "종료" ? "종료된 제품" : productName}
        </ProductName>
        {status !== "종료" && (
          <>
            <Details>체험 신청일 : {applicationDate}</Details>
            {status === "당첨" && (
              <>
                <ReviewPeriod>후기 작성 기간: {reviewPeriod}</ReviewPeriod>
                <ShippingContainer>
                  <ShippingStatus status={shippingStatus || "배송 준비중"}>
                    {shippingStatus === "배송중"
                      ? "배송중"
                      : shippingStatus === "배송 완료"
                      ? "배송 완료"
                      : "배송 준비중"}
                    {shippingStatus === "배송중" && (
                      <ShippingDetails>
                        택배 송장번호: 68728181222
                      </ShippingDetails>
                    )}
                  </ShippingStatus>
                  <ShippingInfo>
                    <ButtonText>후기작성</ButtonText>
                  </ShippingInfo>
                </ShippingContainer>
              </>
            )}
          </>
        )}
        {status === "종료" && (
          <>
            <Details>체험 신청일 : {applicationDate}</Details>
            <ProductName status={status}>종료된 체험</ProductName>
          </>
        )}
      </div>
      <div
        style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
      >
        {status === "신청" && (
          <>
            <Announcement>발표일</Announcement>
            <StatusText>
              {announcementDate ? `D-${announcementDate.daysLeft}` : "미정"}
            </StatusText>
          </>
        )}
        {status === "진행중" && !isExpired && (
          <>
            <Announcement>발표일</Announcement>
            <StatusText>
              {announcementDate ? `D-${announcementDate.daysLeft}` : "미정"}
            </StatusText>
          </>
        )}
        {status === "진행중" && isExpired && (
          <ButtonContainer>
            <ButtonText>당첨 확인하기</ButtonText>
          </ButtonContainer>
        )}
        {status === "종료" && (
          <ResultAnnouncement>발표일 지남</ResultAnnouncement>
        )}
      </div>
      {status === "종료" && <Divider />}{" "}
      {/* Add a divider only for '종료' status */}
    </Container>
  );
};

export default ProductItem;
