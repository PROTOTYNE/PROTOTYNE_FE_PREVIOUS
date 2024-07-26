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


export const SearchP = styled.p<{ transparency: string }>`
    margin: 5px 0px;
    font-weight: 500;
    opacity: ${props => props.transparency};
`;