import React, { useState } from "react";
import styled from "@emotion/styled";

import { Header } from "@/entities";

import {
  TicketInfo,
  Tabs,
  TicketList,
  TransactionList,
  UsageList,
} from "@/entities";

const Container = styled.div`
  margin: 60px 5px;
`;

const DateInput = styled.input`
  width: 150px;
  padding: 5px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

const DateRangeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
`;

const App: React.FC = () => {
  const [ticketCount, setTicketCount] = useState(4); // 보유 티켓 수 초기값
  const [activeTab, setActiveTab] = useState("티켓구매");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [transactions, setTransactions] = useState([
    {
      date: "2024-07-22",
      title: "프로토타인",
      detail: "구매",
      amount: "티켓 5개",
    },
    {
      date: "2024-07-01",
      title: "프로토타인",
      detail: "7월 무료 제공 티켓",
      amount: "티켓 10개",
    },
    {
      date: "2024-06-12",
      title: "개매운떡볶이",
      detail: "후기 미작성 패널티-티켓 차감",
      amount: "-티켓 6개",
      isNegative: true,
    },
    {
      date: "2024-06-01",
      title: "프로토타인",
      detail: "6월 무료 제공 티켓",
      amount: "티켓 10개",
    },
    {
      date: "2024-05-12",
      title: "마라탕후루어쩌구",
      detail: "우수 체험자",
      amount: "티켓 3개",
    },
  ]);

  const [usages] = useState([
    {
      date: "2024-07-22",
      title: "신청한 시제품 제목",
      company: "기업명",
      amount: "티켓 5개",
    },
    {
      date: "2024-07-15",
      title: "신청한 시제품 제목",
      company: "기업명",
      amount: "티켓 5개",
    },
    {
      date: "2024-07-10",
      title: "신청한 시제품 제목",
      company: "기업명",
      amount: "티켓 5개",
    },
  ]);

  const handleBuyTicket = (count: number) => {
    setTicketCount(ticketCount + count);

    const today = new Date().toISOString().split("T")[0];
    const newTransaction = {
      date: today,
      title: "프로토타인",
      detail: "구매",
      amount: `티켓 ${count}개`,
    };

    setTransactions([newTransaction, ...transactions]);
    setActiveTab("전체내역");
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (start && end) {
      return transactionDate >= start && transactionDate <= end;
    } else if (start) {
      return transactionDate >= start;
    } else if (end) {
      return transactionDate <= end;
    } else {
      return true;
    }
  });

  return (
    <>
      <Header>내 티켓</Header>
      <Container>
        <TicketInfo count={ticketCount} />
        <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
        {activeTab === "티켓구매" && (
          <TicketList
            tickets={[
              { count: 5, price: "₩5,000" },
              { count: 10, price: "₩9,000" },
              { count: 20, price: "₩16,000" },
            ]}
            onBuyTicket={handleBuyTicket}
          />
        )}
        {activeTab === "전체내역" && (
          <>
            <DateRangeContainer>
              <DateInput
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <span>~</span>
              <DateInput
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </DateRangeContainer>
            <TransactionList transactions={filteredTransactions} />
          </>
        )}
        {activeTab === "신청내역" && (
          <>
            <DateRangeContainer>
              <DateInput
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <span>~</span>
              <DateInput
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </DateRangeContainer>
            <UsageList usages={usages} />
          </>
        )}
      </Container>
    </>
  );
};

export default App;
