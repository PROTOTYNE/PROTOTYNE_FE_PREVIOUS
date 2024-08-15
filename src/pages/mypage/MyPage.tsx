import { MyPageHeader, ProductExContainer, ProductList } from "@/entities";
import {
  ProductExperience,
  UserInfoWidget,
  WishList,
  ProductInfoContainer,
} from "@/widget";

const MyPage: React.FC = () => {
  const statuses = [
    { count: 3, name: "신청", isActive: true },
    { count: 5, name: "진행중", isActive: false },
    { count: 2, name: "당첨", isActive: false },
    { count: 1, name: "종료", isActive: false },
  ];

  const isWinnerStatusActive = statuses.some(
    (status) => status.name === "신청" && status.isActive
  );

  return (
    <div
      id="my-page"
      style={{
        background: "linear-gradient(to bottom, #90A2B7, #FFFFFF)",
        minHeight: "100vh",
        padding: "20px", // 여백을 주기 위해 추가
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
      <ProductInfoContainer>
        <div className="product-info-section">
          <ProductExContainer title="나의 시제품 체험">
            <ProductExperience statuses={statuses} />
          </ProductExContainer>
        </div>
        <div className="product-list-section">
          <ProductList status="신청" /> {/* 상태에 따라 다르게 표시 */}
        </div>
        {isWinnerStatusActive && ( // '당첨' 상태일 때만 위시리스트 표시
          <div className="wishlist-section">
            <div className="wishlist-header">
              <span className="wishlist-title">관심 목록</span>
              <span className="wishlist-view-all">전체보기</span>
            </div>
            <div className="wishlist-divider"></div>
            <WishList />
          </div>
        )}
      </ProductInfoContainer>
    </div>
  );
};

export default MyPage;
