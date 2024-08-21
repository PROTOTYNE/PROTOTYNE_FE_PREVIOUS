import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";

import ApplyReject from "./ApplyReject";

import { TicketService } from "@/shared";

const Button = styled.button`
  /* Rectangle 109 */
  position: fixed;
  text-align: center;
  width: 75%;
  height: 48px;
  bottom: 11px;

  /* blue gra */
  background: linear-gradient(270deg, #0d1b4a 0%, #476090 50%, #7995b2 100%);
  border-radius: 10px;
`;

const ButtonText = styled.span`
  font-family: "Inter";
  font-weight: 600;
  font-size: 18px;
  line-height: 17px;
  /* identical to box height, or 94% */

  color: #ffffff;
`;

const ApplyButton = ({ require, id }: { require: number; id: string }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const { getTicketNumber } = TicketService();

  useEffect(() => {
    getTicketNumber().then((ticket) => {
      if (ticket > require) setHasTickets(true);
      else setHasTickets(false);
    });
  }, []);

  const [hasTickets, setHasTickets] = useState(false);

  const handleButtonClick = () => {
    if (hasTickets) {
      navigate("/addressinfo/" + id);
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

export default ApplyButton;
