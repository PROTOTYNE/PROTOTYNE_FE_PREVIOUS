import { getTicketCount, getTicketUsed } from "@/service/my/ticket";
import { PAGE_URL } from "@/shared";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// Styled Components 정의
const WidgetContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  font-size: 26px;
  color: #000;
  font-weight: bold;
  margin-right: 8px;
`;

const TicketInfo = styled.p`
  margin: 4px 0;
  flex: 1; /* TicketInfo가 남은 공간을 차지하도록 설정 */
`;

const TicketCount = styled.span`
  font-size: 14px;
  color: #24446b;
  font-weight: 600;
`;

const PurchaseContainer = styled.div`
  margin-top: 8px;
`;

const PurchaseBox = styled.div`
  height: 20px; /* 높이를 조정하여 공간 확보 */
  background-color: #f8f9ff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between; /* 좌우 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  padding: 10px; /* 패딩 추가 */
`;

const BuyButton = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: #000;
  cursor: pointer;
`;

// Props 인터페이스 정의
interface UserInfoProps {
  userName: string; // 사용자 이름
  status: "신청" | "진행중" | "당첨" | "종료"; // 상태 (신청 또는 기타)
}

// UserInfoWidget 컴포넌트 정의
export const UserInfoWidget: React.FC<UserInfoProps> = ({
  userName,
  status,
}) => {
  const navigate = useNavigate();
  const [ticketsOwned, setTicketsOwned] = useState<number>(0);
  const [ticketsUsed, setTicketsUsed] = useState<number>(0); //값은 만들어놓았음

  //api로 가져와야 함(useeffect)

  useEffect(() => {
    async function load() {
      const usedCount = await getTicketUsed("2024-08-18", "2024-12-02");
      if (usedCount !== null) {
        setTicketsUsed(usedCount);
      }
      const ownedCount = await getTicketCount();
      if (ownedCount !== null) {
        setTicketsOwned(ownedCount);
      }
    }
    load().then();
  }, []);

  return (
    <WidgetContainer>
      <UserInfoContainer>
        <UserName onClick={() => navigate("/myinfo")}>
          {userName} {">"}
        </UserName>
      </UserInfoContainer>
      <TicketInfo>
        {ticketsOwned}개의 티켓으로 총 {ticketsUsed}개의 시제품을 체험했어요!
      </TicketInfo>
      {status === "신청" && (
        <PurchaseContainer>
          <PurchaseBox>
            <TicketCount>보유 티켓: {ticketsOwned}개</TicketCount>
            <BuyButton
              onClick={() => {
                navigate(PAGE_URL.MyTicket);
              }}
            >
              구매하기
            </BuyButton>
          </PurchaseBox>
        </PurchaseContainer>
      )}
    </WidgetContainer>
  );
};
