import styled from "@emotion/styled";

interface HeaderProps {
  HeaderText: string;
}

const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 52px;
  left: 0px;
  top: 0;
  background-color: #000000;
  z-index: 5;
  background: linear-gradient(270deg, #0D1B4A 0%, #476090 50%, #7995B2 100%);
`;

const StyledHeaderText = styled.div`
  position: fixed;
  top: 5px;
  left: 40%;
  color: white;
  z-index: 6;
  font-weight: 900;
  font-size: 25px;
`;

const Header: React.FC<HeaderProps> = ({ HeaderText }) => {
  return (
    <>
      <StyledHeaderText>{HeaderText}</StyledHeaderText>
      <StyledHeader />
    </>
  );
};

export default Header;
