// index.ts
export { HomeHeader } from "./home/HomeHeader";
export { Categories } from "./home/Categories";
export { Prototypes, BookmarkPrototypes, SmallBookmarkPrototypes } from "./home/Prototypes";
export { SearchHeader } from "./search/SearchHeader";
export { Searches } from "./search/Searches";

export { ProductExperience } from "./mypage/ProductExperience";
export { ProductInfo } from "./mypage/ProductInfo";
export { UserInfoWidget } from "./mypage/UserInfo";
export { WishList } from "./mypage/WishList";

// 경로 수정
export { ProductInfoContainer } from "../widget/mypage/ProductInfoContainer"; // src/widget/mypage/ProductInfoContainer.tsx의 올바른 상대 경로
