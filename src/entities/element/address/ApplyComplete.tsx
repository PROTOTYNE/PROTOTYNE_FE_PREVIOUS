import React from "react";
import styled from "@emotion/styled";

interface ApplyCompleteProps {
  visible: boolean;
  onClose: () => void;
  onSelectAddress: () => void;
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ModalContent = styled.div`
  width: 60%;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

const StyledCloseButton = styled.button`
  /* 버튼 스타일 */
  padding: 10px 20px;
  background-color: #a4a4a5;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
`;

const StyledButton = styled.button`
  /* 버튼 스타일 */
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #24446b;
  border-radius: 8px;
`;

export const ApplyComplete: React.FC<ApplyCompleteProps> = ({
  visible,
  onClose,
  onSelectAddress,
}) => {
  if (!visible) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>체험 신청 완료</h2>
        <p>마이페이지 - 신청한 시제품에서 확인할 수 있습니다.</p>
        <StyledCloseButton onClick={onClose}>닫기</StyledCloseButton>
        <StyledButton onClick={onSelectAddress}>보러가기</StyledButton>
      </ModalContent>
    </ModalBackground>
  );
};
