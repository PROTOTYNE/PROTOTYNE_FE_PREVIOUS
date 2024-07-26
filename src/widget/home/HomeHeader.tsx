import { Logo, IconContainer, HeaderContainer, Bookmark } from '@/entities';
import { useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const Alarm = styled(NotificationsNoneRoundedIcon)`
    color: #FFFFFF;
    font-size: 30px;
`;

const Search = styled(SearchRoundedIcon)`
    color: #FFFFFF;
    font-size: 30px;
`;

const Account = styled(AccountCircleOutlinedIcon)`
    color: #FFFFFF;
    font-size: 30px;
`;


export const HomeHeader = () => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <IconContainer>
                <Bookmark position="none" top="0%" left="0%" />
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