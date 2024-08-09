import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Prototypes } from "@/widget"
import styled from "@emotion/styled";
import { useNavigate } from 'react-router';

const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 20px 0px 10px 20px;
    background-color: white;
    height: 30px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
`;
const Container = styled.div`
    background-color: #F9F9F9;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`;
const Title = styled.h3`
    margin: 20px 10px;
`;
const DetailPage = ({type} : {type: string}) => {
    const navigate = useNavigate();

    const getTitle = (type: string) => {
        if (type === "popular") {
            return "지금 인기있는 시제품입니다!";
        } else if (type === "deadline") {
            return "체험 신청이 마감 임박한 시제품입니다!";
        } else {
            return "신규 등록된 시제품입니다!";
        }
    };

    return (
        <>
            <Header>
                <ArrowBackIosNewRoundedIcon onClick={() => {navigate('/home')}} />
            </Header>
            <Container>
                <Title>
                    {getTitle(type)}
                </Title>
                <Prototypes type="popular"
                prototype={[{path: "../image/temp.svg", label: "100명 신청", name: "마라탕후루 만두 마라맛 확인 시제품", isBookmark: true }, 
                    {path: "../image/temp.svg", label: "50명 신청", name: "마라탕후루 만두 마라맛 확인", isBookmark: true }, 
                    {path: "../image/temp.svg", label: "5명 신청", name: "마라탕후루 만두 마라맛 확인2", isBookmark: true },
                    {path: "../image/temp.svg", label: "5명 신청", name: "마라탕후루 만두 마라맛 확인3", isBookmark: true },
                    {path: "../image/temp.svg", label: "5명 신청", name: "마라탕후루 만두 마라맛 확인4", isBookmark: true },
                    {path: "../image/temp.svg", label: "5명 신청", name: "마라탕후루 만두 마라맛 확인5", isBookmark: true },
                    {path: "../image/temp.svg", label: "5명 신청", name: "마라탕후루 만두 마라맛 확인6", isBookmark: true },
                    {path: "../image/temp.svg", label: "5명 신청", name: "마라탕후루 만두 마라맛 확인7", isBookmark: true },
                    {path: "../image/temp.svg", label: "5명 신청", name: "마라탕후루 만두 마라맛 확인8", isBookmark: true },
                    {path: "../image/temp.svg", label: "5명 신청", name: "마라탕후루 만두 마라맛 확인9", isBookmark: true }
                ]} />
            </Container>
        </>
    );
};

export default DetailPage;