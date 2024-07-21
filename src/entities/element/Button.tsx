import styled from "@emotion/styled";
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

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


export const Bookmark = styled(BookmarkBorderRoundedIcon)`
    color: #FFFFFF;
    font-size: 30px;
    margin-right: 8px;
`;

export const Alarm = styled(NotificationsNoneRoundedIcon)`
    color: #FFFFFF;
    font-size: 30px;
`;

export const Search = styled(SearchRoundedIcon)`
    color: #FFFFFF;
    font-size: 30px;
`;

export const Account = styled(AccountCircleOutlinedIcon)`
    color: #FFFFFF;
    font-size: 30px;
    margin-left: 8px;
`;
