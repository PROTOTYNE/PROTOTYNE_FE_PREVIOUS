import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import { Categories, HomeHeader, Prototypes } from "@/widget";

//api 호출 {사진, 몇명 신청 여부, 제품명}

const Title = styled.h3`
    margin: 10px 10px;
`;
const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <HomeHeader />
            <Categories />
            <Title onClick={() => navigate('/detail')}>지금 인기있는 시제품 &gt;</Title>
            <Prototypes type="지금 인기있는 시제품 >" 
                prototype={[
                    {path: "./image/temp.svg", label: "100명 신청", name: "마라탕후루 만두 마라맛 확인 시제품", isBookmark: true },
                    {path: "./image/temp.svg", label: "50명 신청", name: "마라탕후루 만두 마라맛 확인", isBookmark: true }
                ]} />
            <Title onClick={() => navigate('/detail')}>지금 인기있는 시제품 &gt;</Title>
            <Prototypes type="지금 인기있는 시제품 >" 
                prototype={[{path: "./image/temp.svg", label: "D - 10", name: "마라탕후루 만두 마라맛 확인 시제품", isBookmark: true }, 
                    {path: "./image/temp.svg", label: "D - 10", name: "마라탕후루 만두 마라맛 확인", isBookmark: true }, 
                    {path: "./image/temp.svg", label: "D - 10", name: "마라탕후루 만두 마라맛 확인2", isBookmark: true }
                ]} />
            <Title onClick={() => navigate('/detail')}>지금 인기있는 시제품 &gt;</Title>
            <Prototypes type="지금 인기있는 시제품 >" 
                prototype={[{path: "./image/temp.svg", label: "100명 신청", name: "마라탕후루 만두 마라맛 확인 시제품", isBookmark: true }, 
                    {path: "./image/temp.svg", label: "50명 신청", name: "마라탕후루 만두 마라맛 확인", isBookmark: true }, 
                    {path: "./image/temp.svg", label: "5명 신청", name: "마라탕후루 만두 마라맛 확인2", isBookmark: true }
                ]} />
        </>
    );
}

export default HomePage;
