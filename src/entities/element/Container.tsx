import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CenterContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: linear-gradient(to right, #3C435A 0%, #313131 51%, #937A6D 100%);
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 10px;
`;



export const SearchP = styled.p<{ transparency: string }>`
    margin: 5px 0px;
    font-weight: 500;
    opacity: ${props => props.transparency};
`;