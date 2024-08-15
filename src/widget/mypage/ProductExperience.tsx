import React from "react";
import {
  Arrow,
  StatusBox,
  StatusContainer,
  StatusCount,
  StatusName,
  Divider,
} from "@/entities";

interface StatusProps {
  statuses: { count: number; name: string; isActive: boolean }[];
}

export const ProductExperience: React.FC<StatusProps> = ({ statuses }) => {
  return (
    <StatusContainer>
      {statuses.map((status, index) => (
        <React.Fragment key={index}>
          <StatusBox isActive={status.isActive}>
            <StatusCount>{status.count}</StatusCount>
            <StatusName>{status.name}</StatusName>
          </StatusBox>
          {index < statuses.length - 1 && <Arrow />}{" "}
          {/* 마지막 상태 뒤에는 화살표를 추가하지 않음 */}
        </React.Fragment>
      ))}
      <Divider /> {/* 모든 상태 아래에 하나의 Divider 추가 */}
    </StatusContainer>
  );
};
