import styled from "@emotion/styled";

export const LargeImage = styled.img`
  width: 230px;
`;

export const Logo = styled.img`
  width: 3.5rem;
  height: 1rem;
  align-self: center;
  margin-bottom: 0px;
`;


export const PrototypeImg = styled.img<{ width: string, height: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 10%;
`;
export const Bookmark = styled.img`
    margin: 0px;
    width: 25px;
    height: 25px;
    border-radius: 30%;
`;