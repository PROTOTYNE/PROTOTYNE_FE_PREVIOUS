import { Logo, IconContainer, HeaderContainer, Bookmark } from '@/entities';
import { useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";

const Alarm = styled.img`
`;

const Search = styled.img`
`;
const Account = styled.img`
`;


export const HomeHeader = () => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <IconContainer>
                <Bookmark src="./image/bookmark.svg" position="none" top="0%" left="0%" />
                <Alarm src="./image/alarm.svg" alt="alarm" />
            </IconContainer>
            <Logo src="./image/logo2.png" alt="logo"/>
            <IconContainer>
                <Search src="./image/search.svg" alt='search' onClick={ () => navigate("/search") } />
                <Account src="./image/account.svg" alt='search' />
            </IconContainer>
        </HeaderContainer>
    );
};