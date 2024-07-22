import { Categories, HomeHeader, Prototypes } from "@/widget";

//api 호출 {사진, 몇명 신청 여부, 제품명}

const HomePage = () => {

    return (
        <>
            <HomeHeader />
            <Categories />
            <Prototypes type="지금 인기있는 시제품입니다!" />
            <Prototypes type="체험 신청 마감 임박!" />
        </>
    );
}

export default HomePage;
