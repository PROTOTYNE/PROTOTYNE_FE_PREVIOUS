// TicketInfo.tsx
import React from "react";
import styled from "@emotion/styled";

const TicketInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
`;

const TicketCount = styled.div`
  font-size: 22px;
  font-weight: bold;

  margin-left: 10px;
`;

const TicketLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #0d1b4a;

  margin-left: 17px;
`;

const TicketLine = styled.div`
  position: relative;
  width: 90%;

  left: 5%;

  height: 0.5px;

  margin-top: 10px;

  background: #8e8e8e;
`;

interface TicketInfoProps {
  count: number;
}

export const TicketInfo: React.FC<TicketInfoProps> = ({ count }) => {
  return (
    <>
      <TicketInfoContainer>
        <TicketLabel>보유 티켓</TicketLabel>
        <TicketCount>{count}</TicketCount>
      </TicketInfoContainer>
      <TicketLine />
    </>
  );
};
