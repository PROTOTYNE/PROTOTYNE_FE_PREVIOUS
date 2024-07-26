import styled from "@emotion/styled";
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

export const Button = styled.button`
  position: fixed;

  bottom: 10px;
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

export const Bookmark = styled(BookmarkBorderRoundedIcon)<{ position: string, top: string, left: string }>`
    color: #FFFFFF;
    font-size: 30px;
    position: ${props => props.position};
    top: ${props => props.top};
    left: ${props => props.left};
`;