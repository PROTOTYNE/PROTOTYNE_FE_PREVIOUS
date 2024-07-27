import React from "react";
import './MyPage.css'; // MyPage의 스타일을 정의한 CSS 파일
import UserInfo from '../../widget/UserInfo'; // UserInfo 컴포넌트 임포트
import ProductInfo from '../../widget/ProductInfo'; // ProductInfo 컴포넌트 임포트
import WishList from '../../widget/WishList'; // WishList 컴포넌트 임포트

const MyPage: React.FC = () => {
    return (
        <div id="my-page">
            <div className="header">
                마이페이지
            </div>
            <div className="user-info-section">
                <div className="section-title">유저 정보</div>
                <UserInfo 
                    userName="조서영" // 예시 데이터
                    ticketsUsed={4}  // 예시 데이터
                    ticketsOwned={12} // 예시 데이터
                />
            </div>
            <div className="experience-section">
                <div className="section-title">나의 시제품 체험</div>
                <ProductInfo
                    state="신청"
                    productName="마라탕후루 만두 마라맛"
                    applicationDate="2024.07.02"
                />
            </div>
            <div className="wishlist-section">
                <div className="wishlist-header">
                    <span className="wishlist-title">관심 목록</span>
                    <span className="wishlist-view-all">전체보기</span>
                </div>
                <div className="wishlist-divider"></div>
                <WishList
                    // WishList의 데이터는 내부에서 처리하므로 여기에 추가할 필요 없음
                />
            </div>
        </div>
    );
}

export default MyPage;
