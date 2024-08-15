import { Logo, Sidebar } from '@/entities';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from "@emotion/styled";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 10px;
`;
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: linear-gradient(to right, #7995B2 0%, #476090 51%, #0D1B4A 100%);
`;
const Menu = styled(MenuRoundedIcon)`
    color: white;
    font-size: 2rem;
    margin: 5px 0px;
`;
export const HomeHeader = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggleSide = () => {
        setIsOpen(true);
    }
    return (
        <HeaderContainer>
            <IconContainer>
                <Menu onClick={toggleSide} />
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </IconContainer>
            <Logo src="./image/logo2.png" alt="logo"/>
            <IconContainer>
                <img src="./image/search.svg" alt='search' onClick={ () => navigate("/search") } />
            </IconContainer>
        </HeaderContainer>
    );
};