import { API, getAccess } from "@/shared/configs/axios";
import { AxiosResponse } from "axios";

export const ProductService = () => {
  const getDates = async (eventId: string) => {
    const {
      data: {
        result: { dateInfo },
      },
    } = (await API.get(`/product/detail/${eventId}`, {
      headers: {
        Authorization: getAccess(),
      },
    })) as AxiosResponse<Product.DateDto>;

    return dateInfo;
  };

  const getInvest = async (eventId: string) => {
    const { data } = (await API.get(`/product/detail/${eventId}`, {
      headers: {
        Authorization: getAccess(),
      },
    })) as AxiosResponse<Product.InvestDto>;

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

  const application = async (id: string) => {
    await API.post(`/application/${id}`);
  };

  const onBookmark = async (id: string) => {
    await API.post(`/like/${id}`);
  };

  const offBookmark = async (id: string) => {
    await API.delete(`/unlike/${id}`);
  };

  return {
    getDates,
    getInvest,
    getResult,
    application,
    onBookmark,
    offBookmark,
  };
};
