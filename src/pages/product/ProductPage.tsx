import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ProductService } from "@/shared";

import {
  DateData,
  ImageSlide,
  Product,
  ProductInfo,
  Footer,
  Header,
} from "@/entities";

interface ProductDetail {
  id: number;
  name: string;
  enterprise: string;
  category: string;
  reqTickets: number;
  imageUrls: string[];
  notes: string;
  contents: string;
  isBookmarked: boolean;
  dateInfo: {
    eventStart: string;
    eventEnd: string;
    releaseStart: string;
    releaseEnd: string;
    feedbackStart: string;
    feedbackEnd: string;
    judgeStart: string;
    judgeEnd: string;
    endDate: string;
  };
  investInfo: {
    apply: boolean;
    status: string;
    shipping: string;
    transportNum: string;
    penalty: boolean;
  };
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const eventId = Number(id);

  const [product, setProduct] = useState<ProductDetail | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await ProductService.getProduct(eventId);
        setProduct(response.result);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [eventId]);

  if (!product) {
    return <div>API 에러</div>;
  }

  return (
    <div>
      <Header colorBackground onBack>
        <img src="/image/logo2.png" alt="logo"></img>
      </Header>
      <ImageSlide/>
      <Product
        category={`#${product.category}`}
        name={product.name}
        company={product.enterprise}
        quantity={product.reqTickets}
      />
      <DateData eventId={eventId} />
      <ProductInfo
        productName={product.name}
        productDescription={product.contents}
        additionalNotes={product.notes}
      />
      <Footer />
    </div>
  );
};

export default ProductPage;