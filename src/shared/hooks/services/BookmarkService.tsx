import { AxiosResponse } from "axios";

import { API, getAccess } from "@/shared";

export const BookmarkService = () => {

  const getBookmarkProduct = async () => {
    const {
      data: {
        result: product,
      },
    } = (await API.get("/like/list", {
        headers: {
            "Authorization": getAccess(),
        }
    })) as AxiosResponse<Product.BookmarkListDto>;

    return product;
  };

  return { getBookmarkProduct };
};