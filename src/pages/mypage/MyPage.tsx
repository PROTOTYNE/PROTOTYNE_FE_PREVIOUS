import { Header, ProductExContainer, ProductList } from "@/entities";
import { BookmarkService } from "@/shared";
import { useUserStore } from "@/shared";
import {
  SmallBookmarkPrototypes,
  ProductExperience,
  ProductInfoContainer,
  UserInfoWidget,
} from "@/widget";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const bookmarkService = BookmarkService();

const UserInfoContainer = styled.div`
  width: 100%;

  display: flex;
  margin-top: 50px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  justify-content: center;
  align-items: center;
`;

const BookmarkContainer = styled.div``;
interface ProductProp {
  userId: 0;
  products: [
    {
      productId: 0;
      eventId: 0;
      name: string;
      reqTickets: 0;
      thumbnailUrl: string;
      count: 0;
    }
  ];
}

const MyPage: React.FC = () => {
  const name = useUserStore((state) => state.name);
  // 선택된 상태값 관리
  const [selected, setSelected] = useState<User.StatusType>(
    User.StatusType.applied
  );
  const [product, setProduct] = useState<ProductProp>({
    userId: 0,
    products: [
      {
        productId: 0,
        eventId: 0,
        name: "",
        reqTickets: 0,
        thumbnailUrl: "",
        count: 0,
      },
    ],
  });
  const navigate = useNavigate();
  const fetchProduct = async () => {
    const product = await bookmarkService.getBookmarkProduct();
    return product;
  };

  useEffect(() => {
    fetchProduct().then((product) => setProduct(product));
  }, []);

  return (
    <div
      id="my-page"
      style={{
        background: "linear-gradient(to bottom, #90A2B7, #FFFFFF)",
        padding: "20px",
        overflowY: "hidden",
      }}
    >
      <Header onBack styled>
        마이 페이지
      </Header>
      <UserInfoContainer>
        <UserInfoWidget userName={name} status="신청" />
      </UserInfoContainer>
      <ProductContainer>
        <ProductInfoContainer>
          <ProductExContainer title="나의 시제품 체험">
            <ProductExperience
              selected={selected}
              onStatusSelected={(selected: User.StatusType) => {
                setSelected(selected);
              }}
            />
          </ProductExContainer>
          <div className="product-list-section">
            <ProductList status={selected} /> {/* 상태에 따라 다르게 표시 */}
          </div>
          {selected === User.StatusType.applied && ( // '당첨' 상태일 때만 위시리스트 표시
            <BookmarkContainer>
              <div className="wishlist-header">
                <span className="wishlist-title">관심 목록</span>
                <span
                  className="wishlist-view-all"
                  onClick={() => navigate("/bookmark")}
                >
                  전체보기
                </span>
                <hr />
              </div>
              <div className="wishlist-divider"></div>
              <SmallBookmarkPrototypes prototype={product} />
            </BookmarkContainer>
          )}
        </ProductInfoContainer>
      </ProductContainer>
    </div>
  );
};

export default MyPage;
