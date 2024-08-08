// AddressSearchModal.tsx
import React from 'react';
import styled from '@emotion/styled';

interface AddressSearchModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectAddress: (address: string) => void;
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
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  width: 300px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #0d1b4a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AddressSearchModal: React.FC<AddressSearchModalProps> = ({ visible, onClose, onSelectAddress }) => {
  if (!visible) return null;

  const handleSelectAddress = (address: string) => {
    onSelectAddress(address);
    onClose();
  };

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>주소 찾기</h2>
        <StyledButton onClick={() => handleSelectAddress('서울특별시 강남구')}>서울특별시 강남구</StyledButton>
        <StyledButton onClick={() => handleSelectAddress('서울특별시 서초구')}>서울특별시 서초구</StyledButton>
        <StyledButton onClick={() => handleSelectAddress('서울특별시 송파구')}>서울특별시 송파구</StyledButton>
        <StyledButton onClick={onClose}>닫기</StyledButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default AddressSearchModal;
