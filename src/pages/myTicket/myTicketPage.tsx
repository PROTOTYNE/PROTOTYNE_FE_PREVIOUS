import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { Header } from "@/entities";
import { TicketService } from "@/shared";

import {
  TicketInfo,
  Tabs,
  TicketList,
  TransactionList,
  UsageList,
} from "@/entities";

const Container = styled.div`
  margin: 73px 5px;
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

  position: relative;
  width: 90%;
  left: 5%;
`;

const App = () => {
  const { getTicketNumber, buyTicket, getAllTicket, getUsedTicket } =
    TicketService();

  const [ticketCount, setTicketCount] = useState(0);
  const [activeTab, setActiveTab] = useState("티켓구매");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [transactions, setTransactions] = useState<
    {
      date: string;
      title: string;
      detail: string;
      amount: string;
    }[]
  >([]);

  const [usages, setUsages] = useState<
    {
      date: string;
      title: string;
      company: string;
      amount: string;
    }[]
  >([]);

  useEffect(() => {
    getTicketNumber().then((ticket) => {
      setTicketCount(ticket);
    });
  }, []);

  useEffect(() => {
    if (startDate !== "" && endDate !== "") {
      if (activeTab === "전체내역")
        getAllTicket(startDate, endDate).then((data) => {
          setTransactions(data);
        });
      if (activeTab === "신청내역") {
        getUsedTicket(startDate, endDate).then((data) => {
          setUsages(data);
        });
      }
    }
  }, [startDate, endDate]);

  const handleBuyTicket = (count: number) => {
    setTicketCount(ticketCount + count);

    buyTicket(count);

    /* const today = new Date().toISOString().split("T")[0];
    const newTransaction = {
      date: today,
      title: "프로토타인",
      detail: "구매",
      amount: `티켓 ${count}개`,
    };

    setTransactions([newTransaction, ...transactions]);
    setActiveTab("전체내역"); */
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setStartDate("");
    setEndDate("");
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
      <Header onBack colorBackground>
        <span style={{ color: "white" }}>내 티켓</span>
      </Header>
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
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              />
              <span>~</span>
              <DateInput
                type="date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
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
