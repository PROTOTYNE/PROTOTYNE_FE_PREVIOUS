import { AxiosResponse } from "axios";

import { API } from "@/shared";

export const ProductService = () => {
  const getProduct = async (code: string) => {
    const {
      data: {
        path : product,
      },
    } = (await API.get("/product/list", {
      params: { code: code },
    })) as AxiosResponse<Product.ProductDto>;

    return product;
  };

  return { getProduct };
};