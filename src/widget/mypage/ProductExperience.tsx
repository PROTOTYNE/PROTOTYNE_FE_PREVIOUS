import {
  Divider,
  StatusBox,
  StatusContainer,
  StatusCount,
  StatusName
} from "@/entities";
import { ProductCount, StatusType } from "@/service/my/product";
import React from "react";

interface StatusProps {
  status: ProductCount
  selected: StatusType
  onStatusSelected: (status: StatusType) => void
}

export const ProductExperience: React.FC<StatusProps> = ({ status, selected, onStatusSelected }) => {
  return (
    <StatusContainer>
      <StatusBox 
        isActive={selected == StatusType.applied}
        onClick={() => onStatusSelected(StatusType.applied)}
      >
        <StatusCount>{status.applied}</StatusCount>
        <StatusName>{StatusType.applied}</StatusName>
      </StatusBox>
      <StatusBox 
        isActive={selected == StatusType.ongoing}
        onClick={() => onStatusSelected(StatusType.ongoing)}
        >
        <StatusCount>{status.ongoing}</StatusCount>
        <StatusName>{StatusType.ongoing}</StatusName>
      </StatusBox>
      <StatusBox 
        isActive={selected == StatusType.winning}
        onClick={() => onStatusSelected(StatusType.winning)}
      >
        <StatusCount>{status.winning}</StatusCount>
        <StatusName>{StatusType.winning}</StatusName>
      </StatusBox>
      <StatusBox 
        isActive={selected == StatusType.completed}
        onClick={() => onStatusSelected(StatusType.completed)}
      >
        <StatusCount>{status.completed}</StatusCount>
        <StatusName>{StatusType.completed}</StatusName>
      </StatusBox>

    
      <Divider /> {/* 모든 상태 아래에 하나의 Divider 추가 */}
    </StatusContainer>
  );
};
