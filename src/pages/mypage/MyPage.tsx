import { MyPageHeader, ProductExContainer, ProductList } from "@/entities";
import { getProductCount, ProductCount, StatusType } from "@/service/my/product";
import {
  ProductExperience,
  ProductInfoContainer,
  UserInfoWidget,
  WishList
} from "@/widget";
import { useEffect, useState } from "react";



const MyPage: React.FC = () => {
  const [countStatus, setCountStatus] = useState<ProductCount>({
    applied: 0,
    ongoing: 0,
    winning: 0,
    completed: 0
  })
  // 선택된 상태값 관리
  const [selected, setSelected] = useState<StatusType>(StatusType.applied)

  useEffect(() => {
    async function load() {
      const result = await getProductCount()
      setCountStatus(result)
    }

    load().then()
  }, [])

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
          status="신청"
        />
      </div>
      <ProductInfoContainer>
        <div className="product-info-section">
          <ProductExContainer title="나의 시제품 체험">
            <ProductExperience 
              status={countStatus} 
              selected={selected}
              onStatusSelected={(selected:StatusType) => {
                setSelected(selected)
              }}
            />
          </ProductExContainer>
        </div>
        <div className="product-list-section">
          <ProductList status={selected} /> {/* 상태에 따라 다르게 표시 */}
        </div>
        {selected === StatusType.applied && ( // '당첨' 상태일 때만 위시리스트 표시
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
