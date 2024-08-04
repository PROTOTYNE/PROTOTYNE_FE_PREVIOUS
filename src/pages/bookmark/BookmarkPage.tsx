import { Header } from "@/entities";
import { BookmarkPrototypes } from "@/widget";
const BookmarkPage = () => {
    return (
        <>
            <Header />
            <BookmarkPrototypes prototype={[{path: "./image/temp.svg", name: "마라탕후루 만두 마라맛 확인 시제품", isBookmark: true },
                {path: "./image/temp.svg", name: "마라탕후루 만두 마라맛 확인 시제품1", isBookmark: true },
                {path: "./image/temp.svg", name: "마라탕후루 만두 마라맛 확인 시제품2", isBookmark: true },
                {path: "./image/temp.svg", name: "마라탕후루 만두 마라맛 확인 시제품3", isBookmark: true },
                {path: "./image/temp.svg", name: "마라탕후루 만두 마라맛 확인 시제품4", isBookmark: true },
                {path: "./image/temp.svg", name: "마라탕후루 만두 마라맛 확인 시제품5", isBookmark: true },
                {path: "./image/temp.svg", name: "마라탕후루 만두 마라맛 확인 시제품6", isBookmark: true },
            ]}/>
        </>
    );
}

export default BookmarkPage;