import styled from "@emotion/styled";

export const Button = styled.button`
  position: fixed;

  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 345px;
  height: 48px;

  background-color: #6482eb;

  font-size: 17px;
  color: white;

  border-radius: 8px;
  border-color: #6482eb;
`;

export const SignUpButton = styled(Button)`
  background: linear-gradient(90deg, #718cab, #505995, #1a0858);
`;

export const DisableButton = styled(Button)`
  background-color: #d9d9d9;
`;

export const TwoOptionsButton = ({
  leftText,
  rightText,
  onClickLeft,
  OnClickRight,
}: {
  leftText: string;
  rightText: string;
  onClickLeft: () => void;
  OnClickRight: () => void;
}) => {
  return (
    <BottomContainer>
      <LeftButton onClick={onClickLeft}>{leftText}</LeftButton>
      <RightButton onClick={OnClickRight}>{rightText}</RightButton>
    </BottomContainer>
  );
};

const BottomContainer = styled.div`
  position: fixed;

  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0%);

  width: 345px;
  height: 48px;

  display: flex;
  flex-direction: row;
`;

const LeftButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 17px;
  color: white;

  border-radius: 8px;
  border-color: #6482eb;

  width: 28%;
  height: 100%;

  background-color: #d9d9d9;
`;

const RightButton = styled(LeftButton)`
  margin-left: 10px;

  width: 70%;

  background: linear-gradient(90deg, #718cab, #505995, #1a0858);
`;
