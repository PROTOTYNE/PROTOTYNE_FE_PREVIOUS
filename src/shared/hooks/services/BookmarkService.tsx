import { AxiosResponse } from "axios";

import { API } from "@/shared";

export const BookmarkService = () => {

  const getBookmarkProduct = async () => {
    const {
      data: {
        result: product,
      },
    } = (await API.get("/like/list", {
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        }
    })) as AxiosResponse<Product.BookmarkListDto>;

    return product;
  };

  return { getBookmarkProduct };
};