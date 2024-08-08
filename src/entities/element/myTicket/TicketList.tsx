// TicketList.tsx
import React from 'react';
import styled from '@emotion/styled';

const TicketListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 20px 15px;
`;

const TicketItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1.5px solid #E9E9E9;
`;

const TicketButton = styled.button`
  background-color: #0d1b4a;
  color: white;
  border: none;
  width: 80px;
  height: 20px;
  text-align: center;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

interface Ticket {
  count: number;
  price: string;
}

interface TicketListProps {
  tickets: Ticket[];
  onBuyTicket: (count: number) => void;
}

const TicketList: React.FC<TicketListProps> = ({ tickets, onBuyTicket }) => {
  return (
    <TicketListContainer>
      {tickets.map((ticket, index) => (
        <TicketItem key={index}>
          <div>티켓 {ticket.count}개</div>
          <TicketButton onClick={() => onBuyTicket(ticket.count)}>{ticket.price}</TicketButton>
        </TicketItem>
      ))}
    </TicketListContainer>
  );
};

export default TicketList;
