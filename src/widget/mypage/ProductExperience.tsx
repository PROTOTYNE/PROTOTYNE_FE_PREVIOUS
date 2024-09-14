import {
  Divider,
  StatusBox,
  StatusContainer,
  StatusCount,
  StatusName,
} from "@/entities";
import { MyPageService } from "@/shared";
import React from "react";
import { useEffect, useState } from "react";
interface StatusProps {
  selected: User.StatusType;
  onStatusSelected: (status: User.StatusType) => void;
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
    fetchOngoing().then((result) => setWinningNum(result.length));
  }, []);

  const fetchSelected = async () => {
    const result = await myPageService.getSelectedProduct();
    return result;
  };

  useEffect(() => {
    fetchSelected().then((result) => setOngoingNum(result.length));
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
        isActive={selected == User.StatusType.applied}
        onClick={() => onStatusSelected(User.StatusType.applied)}
      >
        <StatusCount>{appliedNum}</StatusCount>
        <StatusName>{User.StatusType.applied}</StatusName>
      </StatusBox>
      <StatusBox
        isActive={selected == User.StatusType.ongoing}
        onClick={() => onStatusSelected(User.StatusType.ongoing)}
      >
        <StatusCount>{ongoingNum}</StatusCount>
        <StatusName>{User.StatusType.ongoing}</StatusName>
      </StatusBox>
      <StatusBox
        isActive={selected == User.StatusType.winning}
        onClick={() => onStatusSelected(User.StatusType.winning)}
      >
        <StatusCount>{winningNum}</StatusCount>
        <StatusName>{User.StatusType.winning}</StatusName>
      </StatusBox>
      <StatusBox
        isActive={selected == User.StatusType.completed}
        onClick={() => onStatusSelected(User.StatusType.completed)}
      >
        <StatusCount>{completedNum}</StatusCount>
        <StatusName>{User.StatusType.completed}</StatusName>
      </StatusBox>
      <Divider /> {/* 모든 상태 아래에 하나의 Divider 추가 */}
    </StatusContainer>
  );
};
