// button.tsx
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import ApplyComplete from './ApplyComplete';

const Button = styled.button`
  /* Rectangle 109 */
  position: fixed;
  text-align: center;
  width: 294px;
  height: 48px;
  right: 7px;
  bottom: 11px;

  /* blue gra */
  background: linear-gradient(270deg, #0D1B4A 0%, #476090 50%, #7995B2 100%);
  border-radius: 18px;
`;

const ButtonText = styled.span`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 18px;
  line-height: 17px;
  /* identical to box height, or 94% */

  color: #FFFFFF;
`;

const ApplyButton: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>
        <ButtonText>체험 신청하기</ButtonText>
      </Button>
      <ApplyComplete visible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default ApplyButton;
