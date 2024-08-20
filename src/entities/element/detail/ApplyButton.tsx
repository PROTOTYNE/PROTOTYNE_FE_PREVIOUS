import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import ApplyReject from './ApplyReject';


const Button = styled.button`
  /* Rectangle 109 */
  position: fixed;
  text-align: center;
  width: 75%;
  height: 48px;
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
  const navigate = useNavigate();

  const hasTickets = false; // 티켓 충족 여부를 확인하는 조건 (테스트를 위해 false로 설정)

  const handleButtonClick = () => {
    if (hasTickets) {
      navigate("/addressinfo/:id");
    } else {
      setIsModalVisible(true);
    }
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

/*
TODO: 
case i) 티켓 부족 시 -> 티켓 부족 모달 (구현 완료)
case ii) 티켓 충족 (구현 필요)
- 배송지 입력 X: addressPage로 navigate
- 배송지 입력 O: addressInfoPage로 navigate
*/

export default ApplyButton;
