import React, { useState } from 'react';
import styled from '@emotion/styled';
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
//TODO: 보러가기 버튼 이벤트 나중에 추가
//TODO: '체험 신청하기' 눌렀을 때 티켓 충족 시 주소 입력창으로 연결 


export default ApplyButton;
