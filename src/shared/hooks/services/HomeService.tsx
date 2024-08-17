import { AxiosResponse } from "axios";

import { API } from "@/shared";

export const ProductDetailService = () => {
  //const useStore = useProductStore((state) => state);

  const getProductDetail = async (code: string) => {
    const {
      data: {
        result: product,
      },
    } = (await API.get("/product/list", {
      params: { type: code },
    })) as AxiosResponse<Product.ProductDto>;

    return product;
  };

  return { getProductDetail };
};