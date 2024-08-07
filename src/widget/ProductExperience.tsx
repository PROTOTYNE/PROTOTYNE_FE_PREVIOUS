// components/ProductExperience.tsx
import React from 'react';
import { Arrow, StatusBox, StatusContainer, StatusCount, StatusName } from '../entities/element/UsageStatusProcess';


interface StatusProps {
  statuses: { count: number; name: string; isActive: boolean }[];
}

const ProductExperience: React.FC<StatusProps> = ({ statuses }) => {
  return (
    <StatusContainer>
      {statuses.map((status, index) => (
        <React.Fragment key={index}>
          <StatusBox isActive={status.isActive}>
            <StatusCount>{status.count}</StatusCount>
            <StatusName>{status.name}</StatusName>
          </StatusBox>
          {index < statuses.length - 1 && <Arrow />} {/* 마지막 상태 뒤에는 화살표를 추가하지 않음 */}
        </React.Fragment>
      ))}
    </StatusContainer>
  );
};

export default ProductExperience;