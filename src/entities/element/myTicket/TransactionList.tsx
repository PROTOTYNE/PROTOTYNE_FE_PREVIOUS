// TransactionList.tsx
import React from "react";
import styled from "@emotion/styled";

const TransactionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  position: relative;
  width: 92%;
  left: 4%;
`;

const TransactionItem = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const TransactionDate = styled.div`
  font-size: 16px;
  color: #6e6e6e;
`;

const TransactionTitle = styled.div`
  font-weight: bold;
  font-size: 16px;

  color: #000000;
`;

const TransactionDetail = styled.div`
  font-weight: 350;
  font-size: 16px;

  color: #000000;
`;

const TransactionAmount = styled.div<{ isNegative?: boolean }>`
  position: absolute;

  font-weight: bold;
  font-size: 17px;

  align-self: flex-end;
  top: 30px;

  color: ${(props) => (props.isNegative ? "#FF1304" : "#1d3656")};
`;

interface Transaction {
  date: string;
  title: string;
  detail: string;
  amount: string;
  isNegative?: boolean;
}

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
}) => {
  return (
    <TransactionListContainer>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index}>
          <TransactionDate>{transaction.date}</TransactionDate>
          <TransactionTitle>{transaction.title}</TransactionTitle>
          <TransactionAmount isNegative={transaction.isNegative}>
            {transaction.amount}
          </TransactionAmount>
          <TransactionDetail>{transaction.detail}</TransactionDetail>
        </TransactionItem>
      ))}
    </TransactionListContainer>
  );
};
