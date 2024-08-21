import {
  Divider,
  StatusBox,
  StatusContainer,
  StatusCount,
  StatusName,
} from "@/entities";
import { ProductCount, StatusType } from "@/service/my/product";
import { MyPageService } from "@/shared";
import React from "react";
import { useEffect, useState } from "react";
interface StatusProps {
  selected: StatusType;
  onStatusSelected: (status: StatusType) => void;
}
const myPageService = MyPageService();
export const ProductExperience: React.FC<StatusProps> = ({
  selected,
  onStatusSelected,
}) => {
  const [appliedNum, setAppliedNum] = useState(0);
  const [ongoingNum, setOngoingNum] = useState(0);
  const [winningNum, setWinningNum] = useState(0);
  const [completedNum, setCompletedNum] = useState(0);

  const fetchApplied = async () => {
    const result = await myPageService.getMyProductsApplied();
    return result;
  };

  useEffect(() => {
    fetchApplied().then((result) => setAppliedNum(result.length));
  }, []);

  const fetchOngoing = async () => {
    const result = await myPageService.getOngoing();
    return result;
  };

  useEffect(() => {
    fetchOngoing().then((result) => setOngoingNum(result.length));
  }, []);

  const fetchSelected = async () => {
    const result = await myPageService.getSelectedProduct();
    return result;
  };

  useEffect(() => {
    fetchSelected().then((result) => setWinningNum(result.length));
  }, []);

  const fetchCompleted = async () => {
    const result = await myPageService.getCompleted();
    return result;
  };

  useEffect(() => {
    fetchCompleted().then((result) => setCompletedNum(result.length));
  }, []);
  return (
    <StatusContainer>
      <StatusBox
        isActive={selected == StatusType.applied}
        onClick={() => onStatusSelected(StatusType.applied)}
      >
        <StatusCount>{appliedNum}</StatusCount>
        <StatusName>{StatusType.applied}</StatusName>
      </StatusBox>
      <StatusBox
        isActive={selected == StatusType.ongoing}
        onClick={() => onStatusSelected(StatusType.ongoing)}
      >
        <StatusCount>{ongoingNum}</StatusCount>
        <StatusName>{StatusType.ongoing}</StatusName>
      </StatusBox>
      <StatusBox
        isActive={selected == StatusType.winning}
        onClick={() => onStatusSelected(StatusType.winning)}
      >
        <StatusCount>{winningNum}</StatusCount>
        <StatusName>{StatusType.winning}</StatusName>
      </StatusBox>
      <StatusBox
        isActive={selected == StatusType.completed}
        onClick={() => onStatusSelected(StatusType.completed)}
      >
        <StatusCount>{completedNum}</StatusCount>
        <StatusName>{StatusType.completed}</StatusName>
      </StatusBox>
      <Divider /> {/* 모든 상태 아래에 하나의 Divider 추가 */}
    </StatusContainer>
  );
};
