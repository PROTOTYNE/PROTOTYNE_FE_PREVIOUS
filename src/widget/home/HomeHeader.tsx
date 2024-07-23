import { Bookmark, Alarm, Search, Account, Logo, IconContainer, HeaderContainer } from '@/entities';
import { useNavigate } from 'react-router-dom';

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