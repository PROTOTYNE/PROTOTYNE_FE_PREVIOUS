import { Header } from "@/entities";
import { BookmarkPrototypes } from "@/widget";
import { useState, useEffect } from "react";
import { BookmarkService } from "@/shared";

const bookmarkService = BookmarkService();

interface PrototypeProp {
  userId: 0;
  products: [{
    productId: 0;
    name: string;
    thumbnailUrl: string;
    count: 0;
  }]
};
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

const BookmarkPage = () => {
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

  const fetchProduct = async () => {
    const product = await bookmarkService.getBookmarkProduct();
    return product;
  }

  useEffect(() => {
      fetchProduct()
      .then(product => setProduct(product));
  }, [])

  return (
    <>
      <Header onBack styled>
        관심 목록
      </Header>
      <div style={{ height: "70px" }}></div>
      <BookmarkPrototypes
        prototype={product}
      />
    </>
  );
};

export default BookmarkPage;
