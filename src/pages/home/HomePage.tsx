import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import { Categories, HomeHeader, Prototypes } from "@/widget";
import { useEffect } from "react";

//api 호출 {사진, 몇명 신청 여부, 제품명}

const Title = styled.h3`
    width: 200px;
    margin: 15px 0px 0px 20px;
`;
const HomePage = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <HomeHeader />
            <Categories />
            <Title onClick={() => navigate('/detail/popular')}>지금 인기있는 시제품 &gt;</Title>
            <Prototypes type="popular" 
                prototype={[
                    {path: "./image/temp.svg", label: "100명 신청", name: "마라탕후루 만두 마라맛 확인 시제품", isBookmark: true },
                    {path: "./image/temp.svg", label: "50명 신청", name: "마라탕후루 만두 마라맛 확인", isBookmark: false }
                ]} />
            <Title onClick={() => navigate('/detail/imminent')}>체험 신청 마감 임박! &gt;</Title>
            <Prototypes type="imminent" 
                prototype={[{path: "./image/temp.svg", label: "D - 10", name: "마라탕후루 만두", isBookmark: true }, 
                    {path: "./image/temp.svg", label: "D - 10", name: "마라탕후루 만두 마라맛 확인", isBookmark: true }, 
                    {path: "./image/temp.svg", label: "D - 10", name: "마라탕후루 만두 마라맛 확인2", isBookmark: true }
                ]} />
            <Title onClick={() => navigate('/detail/new')}>신규 등록된 시제품 &gt;</Title>
            <Prototypes type="new" 
                prototype={[{path: "./image/temp.svg", label: "D - 10", name: "마라탕후루 만두 마라맛 확인 시제품", isBookmark: true }, 
                    {path: "./image/temp.svg", label: "D - 10", name: "마라탕후루 만두 마라맛 확인", isBookmark: true }, 
                    {path: "./image/temp.svg", label: "D - 10", name: "마라탕후루 만두 마라맛 확인2", isBookmark: true }
                ]} />
        </>
    );
}

export default HomePage;
