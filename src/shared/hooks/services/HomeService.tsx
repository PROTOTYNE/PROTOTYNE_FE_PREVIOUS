import { AxiosResponse } from "axios";

import { API, getAccess } from "@/shared";

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

  const getHomeProduct = async () => {
    const {
      data: {
        result: product,
      },
    } = (await API.get("/product/home", {
      headers: {
        "Authorization": getAccess(),
      }
    })) as AxiosResponse<Product.ProductHomeDto>;
    return product;
  };

  return { getProductDetail, getHomeProduct };
};