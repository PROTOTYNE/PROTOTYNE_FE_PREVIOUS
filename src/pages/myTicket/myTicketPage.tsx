// App.tsx
import React, { useState } from 'react';
import Header from '@/entities/element/Header';
import TicketInfo from '@/entities/element/myTicket/TicketInfo';
import Tabs from '@/entities/element/myTicket/Tabs';
import TicketList from '@/entities/element/myTicket/TicketList';

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

  return (
    <>
      <Header HeaderText="내 티켓" />
        <TicketInfo count={ticketCount} />
        <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
        {activeTab === '티켓구매' && (
          <TicketList tickets={tickets} onBuyTicket={handleBuyTicket} />
        )}
        {/* 전체내역 및 사용내역 탭 내용 추가 가능 */}
    </>
  );
};

export default App;
