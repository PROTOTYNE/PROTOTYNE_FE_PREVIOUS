import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import { Categories, HomeHeader, Prototypes } from "@/widget";


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
            {/* <Prototypes type="popular" 
                prototype={[
                    ]} /> */}
            <Title onClick={() => navigate('/detail/imminent')}>체험 신청 마감 임박! &gt;</Title>
            {/* <Prototypes type="imminent" 
                prototype={[]} /> */}
            <Title onClick={() => navigate('/detail/new')}>신규 등록된 시제품 &gt;</Title>
            {/* <Prototypes type="new" 
                prototype={[]} /> */}
        </>
    );
}

export default HomePage;
