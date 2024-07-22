import { Bookmark, Alarm, Search, Account, Logo, IconContainer, HeaderContainer } from '@/entities';

export const HomeHeader = () => {

    return (
        <HeaderContainer>
            <IconContainer>
                <Bookmark />
                <Alarm />
            </IconContainer>
            <Logo src="./image/logo2.png" alt="logo"/>
            <IconContainer>
                <Search />
                <Account />
            </IconContainer>
        </HeaderContainer>
    );
};