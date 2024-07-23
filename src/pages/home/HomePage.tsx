import { Categories, HomeHeader, Prototypes } from "@/widget";

//api 호출 {사진, 몇명 신청 여부, 제품명}

const HomePage = () => {

    return (
        <>
            <HomeHeader />
            <Categories />
            <Prototypes type="지금 인기있는 시제품입니다!" prototype={[{path: "./image/temp.svg", label: "100명 신청", name: "마라탕후루 만두 마라맛 확인 시제품" }, {path: "./image/temp.svg", label: "50명 신청", name: "마라탕후루 만두 마라맛 확인" }]} />
            <Prototypes type="체험 신청 마감 임박!" prototype={[{path: "./image/temp.svg", label: "100명 신청", name: "마라탕후루 만두 마라맛 확인 시제품" }, {path: "./image/temp.svg", label: "50명 신청", name: "마라탕후루 만두 마라맛 확인" }, {path: "./image/temp.svg", label: "5명 신청", name: "마라탕후루 만두 마라맛 확인2" }]}/>
            <Prototypes type="신규 등록된 시제품 입니다!" prototype={[{path: "./image/temp.svg", label: "100명 신청", name: "마라탕후루 만두 마라맛 확인 시제품" }, {path: "./image/temp.svg", label: "50명 신청", name: "마라탕후루 만두 마라맛 확인" }, {path: "./image/temp.svg", label: "5명 신청", name: "마라탕후루 만두 마라맛 확인2" }]} />
        </>
    );
}

export default HomePage;
