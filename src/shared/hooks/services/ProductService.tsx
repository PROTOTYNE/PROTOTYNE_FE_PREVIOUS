import { AxiosResponse } from "axios";

import { API, useProductStore } from "@/shared";

export const ProductService = () => {
  //const useStore = useProductStore((state) => state);

  const getProduct = async (code: string) => {
    const {
      data: {
        result: product,
      },
    } = (await API.get("/product/list", {
      params: { type: code },
    })) as AxiosResponse<Product.ProductApplicantDto>;

    return product;
  };

  return { getProduct };
};