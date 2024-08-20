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

const ProductPage = () => {
  const {param} = useParams();
  const eventId = Number(param);
  const {getResult} = ProductService();

  const [result, setResult] = useState({
    "id": 0,
    "name": "string",
    "enterprise": "string",
    "category": "뷰티",
    "reqTickets": 0,
    "imageUrls": [
      "string"
    ],
    "notes": "string",
    "contents": "string",
    "isBookmarked": true,
  });
  console.log(result);


  const fetchProduct = async () => {
    if(!eventId) return
    const result = await getResult(eventId);
    return result;
  }

  useEffect(() => {
    fetchProduct()
    .then(result => setResult(result));
  }, [eventId]);

  return (
    <div>
      <Header colorBackground onBack>
        <img src="/image/logo2.png" alt="logo"></img>
      </Header>
      <ImageSlide/>
      {/* <Product
        category={`#${result.category}`}
        name={result.name}
        company={result.enterprise}
        quantity={result.reqTickets}
      />
      <DateData />
      <ProductInfo
        productName={result.name}
        productDescription={result.contents}
        additionalNotes={result.notes}
      /> */}
      <Footer />
    </div>
  );
};

export default ProductPage;