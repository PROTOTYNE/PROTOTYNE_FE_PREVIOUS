import { HeaderHome, Bookmark, Alarm, Search, Account, Logo, IconContainer } from "@/entities";

const HomePage = () => {

    return (
        <>
            <HeaderHome>
                <IconContainer>
                    <Bookmark />
                    <Alarm />
                </IconContainer>
                <Logo src="./image/logo2.png" alt="logo"/>
                <IconContainer>
                    <Search />
                    <Account />
                </IconContainer>
            </HeaderHome>

        </>
    );
}

export default HomePage;
