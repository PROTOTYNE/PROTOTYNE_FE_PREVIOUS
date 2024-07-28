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
