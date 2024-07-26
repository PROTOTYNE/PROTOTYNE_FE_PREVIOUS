import { Logo, Bookmark } from '@/entities';
import { useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 10px;
`;
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: linear-gradient(to right, #3C435A 0%, #313131 51%, #937A6D 100%);
`;


export const HomeHeader = () => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <IconContainer>
                <Bookmark src="./image/bookmark.svg" position="none" top="0%" left="0%" />
                <img src="./image/alarm.svg" alt="alarm" />
            </IconContainer>
            <Logo src="./image/logo2.png" alt="logo"/>
            <IconContainer>
                <img src="./image/search.svg" alt='search' onClick={ () => navigate("/search") } />
                <img src="./image/account.svg" alt='search' />
            </IconContainer>
        </HeaderContainer>
    );
};