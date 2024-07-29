import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Prototypes } from "@/widget"
import styled from "@emotion/styled";
import { useNavigate } from 'react-router';

const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 10px 0px;
`;
const Container = styled.div`
    background-color: #F9F9F9;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    margin: 20px 10px;
`;
const DetailPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header>
                <ArrowBackIosNewRoundedIcon onClick={() => {navigate('/home')}} />
            </Header>
            <Container>
                <Title>
                    지금 인기있는 시제품입니다!
                </Title>
                <Prototypes type="지금 인기있는 시제품 >"
                prototype={[
                    {path: "./image/temp.svg", label: "100명 신청", name: "마라탕후루 만두 마라맛 확인 시제품", isBookmark: true },
                    {path: "./image/temp.svg", label: "50명 신청", name: "마라탕후루 만두 마라맛 확인", isBookmark: false }
                ]} />
            </Container>
        </>
    );
};

export default DetailPage;