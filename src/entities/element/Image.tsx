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


export const PrototypeImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10%;
`;
export const Bookmark = styled.img<{ position: string, top: string, left: string }>`
    margin: 0px;
    position: ${props => props.position};
    top: ${props => props.top};
    left: ${props => props.left};
`;