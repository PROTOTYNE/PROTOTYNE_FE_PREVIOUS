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
  const { eventId } = useParams();
  const { getResult } = ProductService();

  const [result, setResult] = useState({
    id: 0,
    name: "",
    enterprise: "",
    category: "",
    reqTickets: 0,
    imageUrls: [""],
    notes: "",
    contents: "",
    isBookmarked: true,
  });

  const fetchProduct = async () => {
    console.log(`Request URL: /product/detail/${eventId}`);

    if (!eventId) {
      console.log(`eventId error=${eventId}`);
      return;
    }
    try {
      console.log(`Fetching product data for flag=${eventId}`);
      const data = await getResult(eventId);

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
        <img
          style={{ marginTop: "10px", width: "4.3rem" }}
          src="/image/logo2.png"
          alt="logo"
        ></img>
      </Header>
      <ImageSlide imageUrls={result.imageUrls} />
      <Product
        category={result.category}
        name={result.name}
        company={result.enterprise}
        quantity={result.reqTickets}
      />
      {eventId ? <DateData eventId={eventId} /> : null}
      <ProductInfo
        productName={result.name}
        productDescription={result.contents}
        additionalNotes={result.notes}
      />
      {eventId ? <Footer require={result.reqTickets} id={eventId} /> : null}
    </div>
  );
};

export default ProductPage;
