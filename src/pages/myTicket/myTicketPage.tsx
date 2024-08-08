// App.tsx
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from '@/entities/element/Header';
import TicketInfo from '@/entities/element/myTicket/TicketInfo';
import Tabs from '@/entities/element/myTicket/Tabs';
import TicketList from '@/entities/element/myTicket/TicketList';
import TransactionList from '@/entities/element/myTicket/TransactionList';

const DateInput = styled.input`
  padding: 5px;
  margin: 0 30px;
  border: 1.5px solid #D9D9D9;
  border-radius: 4px;
`;

const DateRangeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const App: React.FC = () => {
  const [ticketCount, setTicketCount] = useState(4); // 보유 티켓 수 초기값
  const [activeTab, setActiveTab] = useState('티켓구매');

  const handleBuyTicket = (count: number) => {
    setTicketCount(ticketCount + count);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const tickets = [
    { count: 5, price: '₩5,000' },
    { count: 10, price: '₩9,000' },
    { count: 20, price: '₩16,000' }
  ];

  const transactions = [
    { date: '24.07.22', title: '프로토타입', detail: '구매', amount: '+ 티켓 5개' },
    { date: '24.07.01', title: '프로토타입', detail: '7월 무료 제공 티켓', amount: '+ 티켓 10개' },
    { date: '24.06.12', title: '개매운떡볶이', detail: '후기 미작성 패널티-티켓 차감', amount: '-티켓 6개', isNegative: true },
    { date: '24.06.01', title: '프로토타입', detail: '6월 무료 제공 티켓', amount: '+ 티켓 10개' },
    { date: '24.05.12', title: '마라탕후루어쩌구', detail: '우수 체험자', amount: '+ 티켓 3개' }
  ];

  return (
    <>
      <Header HeaderText="내 티켓" />
        <TicketInfo count={ticketCount} />
        <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
        {activeTab === '티켓구매' && (
          <TicketList tickets={tickets} onBuyTicket={handleBuyTicket} />
        )}
        {activeTab === '전체내역' && (
          <>
            <DateRangeContainer>
              <DateInput type="date" />
              <span>~</span>
              <DateInput type="date" />
            </DateRangeContainer>
            <TransactionList transactions={transactions} />
          </>
        )}
    </>
  );
};

export default App;
