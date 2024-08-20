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
  const {eventId} = useParams();
  const {getResult} = ProductService();

  const [result, setResult] = useState({
    "id": 0,
    "name": "",
    "enterprise": "",
    "category": "",
    "reqTickets": 0,
    "imageUrls": [
      "string"
    ],
    "notes": "",
    "contents": "",
    "isBookmarked": true,
  });

  const fetchProduct = async () => {
    console.log(`Request URL: /product/detail/${eventId}`);

    if (!eventId) {
      console.log(`eventId error=${eventId}`);
      return;
    } 
    try {
      console.log(`Fetching product data for flag=${eventId}`);
      const data = await getResult(eventId.toString());
      
      console.log("API Response Data:", data);

      if (data) {
        setResult(data);
      }
    } catch (error) {
      console.error("Failed to fetch product data:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [eventId]);

  return (
    <div>
      <Header colorBackground onBack>
        <img src="/image/logo2.png" alt="logo"></img>
      </Header>
      <ImageSlide/>
      <Product
        category={`#${result.category}`}
        name={result.name}
        company={result.enterprise}
        quantity={result.reqTickets}
      />
      {/* <DateData /> */}
      <ProductInfo
        productName={result.name}
        productDescription={result.contents}
        additionalNotes={result.notes}
      />
      <Footer />
    </div>
  );
};

export default ProductPage;