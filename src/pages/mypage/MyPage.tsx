import { Header, ProductExContainer, ProductList } from "@/entities";
import {
  getProductCount,
  ProductCount,
  StatusType,
} from "@/service/my/product";
import { BookmarkService } from "@/shared";
// import { useUserStore } from "@/shared";
import {
  BookmarkPrototypes,
  ProductExperience,
  ProductInfoContainer,
  UserInfoWidget,
} from "@/widget";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const bookmarkService = BookmarkService();

// const userStore = useUserStore((state) => state);
const UserInfoContainer = styled.div`
  display: flex;
  margin-top: 60px;
`;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  with: 350px;
`;
interface ProductProp {
  userId: 0;
  products: [{
    productId: 0;
    name: string;
    reqTickets: 0;
    thumbnailUrl: string;
    count: 0;
  }]
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
  const [product, setProduct] = useState<ProductProp>({
    userId: 0,
    products: [{
      productId: 0,
      name: "",
      reqTickets: 0,
      thumbnailUrl: "",
      count: 0,
    }]
  });
  const navigate = useNavigate();
  const fetchProduct = async () => {
    const product = await bookmarkService.getBookmarkProduct();
    return product;
  }

  useEffect(() => {
      fetchProduct()
      .then(product => setProduct(product));
  }, [])

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
      <Header onBack styled>
        마이 페이지
      </Header>
      <UserInfoContainer>
        <UserInfoWidget userName="aaa" status="신청" />
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
              <span className="wishlist-view-all" onClick={() => navigate('/bookmark')}>전체보기</span>
              <hr />
            </div>
            <div className="wishlist-divider"></div>
            <BookmarkPrototypes
              prototype={product}
            />
          </div>
        )}
        </ProductInfoContainer>
        
      </ProductContainer>
    </div>
  );
};

export default MyPage;
