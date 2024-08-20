import { API, getAccess } from "@/shared/configs/axios";
import { AxiosResponse } from "axios";

export const ProductService = () => {
  const getDates = async (eventId: string) => {
    const {
      data: { result },
    } = (await API.get(`/product/detail/${eventId}`, {
      headers: {
        Authorization: getAccess(),
      },
    })) as AxiosResponse<Product.DateDto>;
    console.log(result);

    return result;
  };

  const getInvest = async (eventId: string) => {
    const { data } = (await API.get(`/product/detail/${eventId}`, {
      headers: {
        Authorization: getAccess(),
      },
    })) as AxiosResponse<Product.InvestDto>;
    console.log(data);

    return data;
  };

  const getResult = async (eventId: string) => {
    const {
      data: { result },
    } = (await API.get(`/product/detail/${eventId}`, {
      headers: {
        Authorization: getAccess(),
      },
    })) as AxiosResponse<Product.ResultDto>;

    console.log(result);

    return result;
  };

  return { getDates, getInvest, getResult };
};
