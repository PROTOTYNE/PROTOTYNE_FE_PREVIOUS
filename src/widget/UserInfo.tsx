import React from 'react';
import styled from 'styled-components';

// Styled Components 정의
const WidgetContainer = styled.div`
  width: 343px;
  height: auto; /* 높이를 자동으로 조정 */
  background-color: #9dc2e9cd;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  font-size: 16px;
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
  color: #24446B;
  font-weight: 600;
`;

const PurchaseContainer = styled.div`
  margin-top: 8px;
`;

const PurchaseBox = styled.div`
  height: 20px; /* 높이를 조정하여 공간 확보 */
  background-color: #F8F9FF;
  border-radius: 19px;
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
  userName: string;          // 사용자 이름
  ticketsOwned: number;     // 보유한 티켓 수
  ticketsUsed: number;      // 체험한 시제품 수
  status: '신청' | '진행중' | '당첨' | '종료';  // 상태 (신청 또는 기타)
}

// UserInfoWidget 컴포넌트 정의
const UserInfo: React.FC<UserInfoProps> = ({ userName, ticketsOwned, ticketsUsed, status }) => {
  return (
    <WidgetContainer>
      <UserInfoContainer>
        <UserName>{userName}</UserName>
        <span style={{ color: '#000' }}>&gt;</span>
      </UserInfoContainer>
      <TicketInfo>{ticketsOwned}개의 티켓으로 총 {ticketsUsed}개의 시제품을 체험했어요!</TicketInfo>
      {status === '신청' && (
        <PurchaseContainer>
          <PurchaseBox>
            <TicketCount>보유 티켓: {ticketsOwned}개</TicketCount>
            <BuyButton>구매하기</BuyButton>
          </PurchaseBox>
        </PurchaseContainer>
      )}
    </WidgetContainer>
  );
};

export default UserInfo;
