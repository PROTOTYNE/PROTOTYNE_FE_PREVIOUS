import React from 'react';
import styled from '@emotion/styled';

interface ApplyRejectProps {
  visible: boolean;
  onClose: () => void;
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
  width: 50%;
  background-color: #A4A4A5;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
`;


const ApplyReject: React.FC<ApplyRejectProps> = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>티켓 부족</h2>
        <p>보유한 티켓이 부족하여 신청할 수 없어요 어쩌구 저쩌구</p>
        <StyledCloseButton onClick={onClose}>닫기</StyledCloseButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default ApplyReject;



