import { Logo, IconContainer, HeaderContainer } from '@/entities';
import { useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

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


export const HomeHeader = () => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <IconContainer>
                <Bookmark />
                <Alarm />
            </IconContainer>
            <Logo src="./image/logo2.png" alt="logo"/>
            <IconContainer>
                <Search onClick={ () => navigate("/search") } />
                <Account />
            </IconContainer>
        </HeaderContainer>
    );
};