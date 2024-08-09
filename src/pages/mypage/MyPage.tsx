// pages/MyPage.tsx
import React from "react";
import MyPageHeader from "../../entities/element/MyPageHeader";
import ProductExContainer from "../../entities/element/ProductExContainer";
import ProductExperience from "../../widget/ProductExperience";
import ProductInfo from "../../widget/ProductInfo";
import UserInfoWidget from "../../widget/UserInfo";
import WishList from "../../widget/WishList";
import ProductList from "../../entities/element/ProductList"; // ProductList 컴포넌트 임포트

const MyPage: React.FC = () => {
  const statuses = [
    { count: 3, name: "신청", isActive: false },
    { count: 5, name: "진행중", isActive: true },
    { count: 2, name: "당첨", isActive: false },
    { count: 1, name: "종료", isActive: false },
  ];

  return (
    <div
      id="my-page"
      style={{
        background: "linear-gradient(to bottom, #90A2B7, #FFFFFF)",
        minHeight: "100vh",
      }}
    >
      <MyPageHeader title="마이페이지" />
      <div className="user-info-section">
        <UserInfoWidget
          userName="조서영"
          ticketsOwned={12}
          ticketsUsed={4}
          status="신청"
        />
      </div>
      <div className="product-info-section">
        <ProductExContainer title="나의 시제품 체험">
          <ProductExperience statuses={statuses} />
        </ProductExContainer>
      </div>
      <div className="experience-section">
        <div className="section-title"></div>
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
        <WishList />
      </div>
      <div className="product-list-section">
        <ProductList status="신청" /> {/* 상태에 따라 다르게 표시 */}
      </div>
    </div>
  );
};

export default MyPage;
