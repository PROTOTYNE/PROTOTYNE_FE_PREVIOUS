// TicketInfo.tsx
import React from 'react';
import styled from '@emotion/styled';

const TicketInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110px;
`;

const TicketCount = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const TicketLabel = styled.div`
  font-size: 16px;
  font-weight: normal;
`;

const TicketLine = styled.div`
width: 100%;
height: 0.5px;
left: 100px;
margin-top: 10px;

background: #8E8E8E;
`

interface TicketInfoProps {
  count: number;
}

const TicketInfo: React.FC<TicketInfoProps> = ({ count }) => {
  return (
    <>
        <TicketInfoContainer>
        <TicketLabel>보유 티켓</TicketLabel>
        <TicketCount>{count}</TicketCount>
        </TicketInfoContainer>
        <TicketLine/>
    </>
  );
};

export default TicketInfo;
