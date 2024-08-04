import styled from "@emotion/styled";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useNavigate } from "react-router";

const BackIcon = styled(ArrowBackIosNewRoundedIcon)`
    color: white;
    margin: 16px 15px;
    position: fixed;
    top: 0px;
    left: 0px;
`;
const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    background: linear-gradient(to right, #7995B2 0%, #476090 51%, #0D1B4A 100%);
`;
const Title = styled.div`
    color: white;
    font-size: 25px;
    font-weight: bold;
    margin: 16px 0px;
`;
export const Header = () => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <BackIcon onClick={() => {navigate('/home')}}/>
            <Title>
                관심 목록
            </Title>
        </HeaderContainer>
    );
}