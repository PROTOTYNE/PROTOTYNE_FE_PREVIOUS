import { API, getAccess } from "@/shared/configs/axios";
import { AxiosResponse } from "axios";

export const ProductService = () => {
  const eventId = 1234;

  const getDates = async (code: string) => {
    const {
      data: {
        result: product,
      },
    } = (await API.get(`/product/detail/${eventId}`, {
      headers: {
        "Authorization": getAccess(),
      },
      params: {type: code},
    })) as AxiosResponse<Product.DateDto>;

    return product;
  }

  const getInvest = async (code: string) => {
    const {
      data: {
        result: product,
      },
    } = (await API.get(`/product/detail/${eventId}`, {
      headers: {
        "Authorization": getAccess(),
      },
      params: {type: code},
    })) as AxiosResponse<Product.InvestDto>;

    return product
  }

  const getResult = async (eventId: number) => {
    const {
      data: {
        result,
      },
    } = (await API.get(`/product/detail/${eventId}`, {
      headers: {
        "Authorization": getAccess(),
      },
    })) as AxiosResponse<Product.ResultDto>;

    return result
  }

  return { getDates, getInvest, getResult };

};
