import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

import { ProductDetailService } from "@/shared";
import { Categories, HomeHeader, Prototypes } from "@/widget";
import { Container } from "@/entities";

const homeService = ProductDetailService();

const Title = styled.h3`
  width: 90%;
  margin: 15px 0px 0px 20px;
`;

interface ProductProp {
  popularList: [
    {
      id: 0;
      name: string;
      thumbnailUrl: string;
      investCount: 0;
      reqTickets: 0;
      bookmark: true;
    }
  ];
  imminentList: [
    {
      id: 0;
      name: string;
      thumbnailUrl: string;
      dday: 0;
      reqTickets: 0;
      bookmark: true;
    }
  ];
  newList: [
    {
      id: 0;
      name: string;
      thumbnailUrl: string;
      dday: 0;
      reqTickets: 0;
      bookmark: true;
    }
  ];
}
const HomePage = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductProp>({
    popularList: [
      {
        id: 0,
        name: "",
        thumbnailUrl: "",
        investCount: 0,
        reqTickets: 0,
        bookmark: true,
      },
    ],
    imminentList: [
      {
        id: 0,
        name: "",
        thumbnailUrl: "",
        dday: 0,
        reqTickets: 0,
        bookmark: true,
      },
    ],
    newList: [
      {
        id: 0,
        name: "",
        thumbnailUrl: "",
        dday: 0,
        reqTickets: 0,
        bookmark: true,
      },
    ],
  });

  const fetchProduct = async () => {
    const productArray = await homeService.getHomeProduct();
    return productArray;
  };

  useEffect(() => {
    fetchProduct().then((product) => setProduct(product));
  }, []);

  return (
    <>
      <HomeHeader />
      <Categories />
      <Container>
        <Title onClick={() => navigate("/detail/popular")}>
          지금 인기있는 시제품 &gt;
        </Title>
        <Prototypes type="popular" prototypes={product.popularList} />
        <Title onClick={() => navigate("/detail/imminent")}>
          체험 신청 마감 임박! &gt;
        </Title>
        <Prototypes type="imminent" prototypes={product.imminentList} />
        <Title onClick={() => navigate("/detail/new")}>
          신규 등록된 시제품 &gt;
        </Title>
        <Prototypes type="new" prototypes={product.newList} />
      </Container>
    </>
  );
};

export default HomePage;
