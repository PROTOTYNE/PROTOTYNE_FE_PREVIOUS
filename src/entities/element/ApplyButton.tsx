// button.tsx
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import ApplyComplete from './ApplyComplete';
import ApplyReject from './ApplyReject';

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
      <ApplyReject visible={isModalVisible} onClose={handleCloseModal} />
      </div>
  );
};
//보러가기 버튼 이벤트 나중에 추가

/*
<ApplyReject visible={isModalVisible} onClose={handleCloseModal} />
티켓 부족 모달
*/

/*
<ApplyComplete visible={isModalVisible} onClose={handleCloseModal} />
체험 신청 완료 모달
*/


export default ApplyButton;
