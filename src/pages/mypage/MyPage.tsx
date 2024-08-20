import { MyPageHeader, ProductExContainer, ProductList } from "@/entities";
import {
  getProductCount,
  ProductCount,
  StatusType,
} from "@/service/my/product";
import { MyPageService } from "@/shared";
import {
  ProductExperience,
  ProductInfoContainer,
  UserInfoWidget,
  WishList,
} from "@/widget";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const myPageService = MyPageService();
const UserInfoContainer = styled.div`
  display: flex;
`;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  with: 350px;
`;

interface Product {
  commonInfo: {
    investmentId: 0,
    eventId: 0,
    productId: 0,
    name: string,
    thumbnailUrl: string,
    calculatedStatus: string,
    createdAt: string,
  },
  shipping: string,
  transportNum: string,
  feedbackStart: string,
  feedbackEnd: string
}
const MyPage: React.FC = () => {
  const [countStatus, setCountStatus] = useState<ProductCount>({
    applied: 0,
    ongoing: 0,
    winning: 0,
    completed: 0,
  });
  // 선택된 상태값 관리
  const [selected, setSelected] = useState<StatusType>(StatusType.applied);
  const [ongoingProduct, setOngoingProduct] = useState<Product[]>([]);

  const fetchOngoing = async () => {
    const result = await myPageService.getProgress();
    return result;
  }
  useEffect(() => {
    fetchOngoing()
    .then((result) => setOngoingProduct(result));
  }, []);
  
  useEffect(() => {
    async function load() {
      const result = await getProductCount();
      setCountStatus(result);
    }

    load().then();
  }, []);

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
      <UserInfoContainer>
        <UserInfoWidget userName="조서영" status="신청" />
      </UserInfoContainer>
      <ProductContainer>
        <ProductInfoContainer>
          <ProductExContainer title="나의 시제품 체험">
            <ProductExperience
              status={countStatus}
              selected={selected}
              onStatusSelected={(selected: StatusType) => {
                setSelected(selected);
              }}
            />
          </ProductExContainer>
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
        
      </ProductContainer>
    </div>
  );
};

export default MyPage;
