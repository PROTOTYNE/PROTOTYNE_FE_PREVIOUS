// UsageList.tsx
import React from 'react';
import styled from '@emotion/styled';

const UsageListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UsageItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const UsageDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const UsageDate = styled.div`
  font-size: 12px;
  color: #888;
`;

const UsageTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const UsageCompany = styled.div`
  font-size: 14px;
  color: #666;
`;

const UsageAmount = styled.div`
  font-size: 14px;
  color: #0d1b4a;
`;

interface Usage {
  date: string;
  title: string;
  company: string;
  amount: string;
}

interface UsageListProps {
  usages: Usage[];
}

const UsageList: React.FC<UsageListProps> = ({ usages }) => {
  return (
    <UsageListContainer>
      {usages.map((usage, index) => (
        <UsageItem key={index}>
          <UsageDetail>
            <UsageDate>신청일자 {usage.date}</UsageDate>
            <UsageTitle>{usage.title}</UsageTitle>
            <UsageCompany>{usage.company}</UsageCompany>
          </UsageDetail>
          <UsageAmount>{usage.amount}</UsageAmount>
        </UsageItem>
      ))}
    </UsageListContainer>
  );
};

export default UsageList;
