import { AxiosResponse } from "axios";

import { API, getAccess, setAccess } from "@/shared";

export const SearchService = () => {

  const deleteSearchList = async (code: string) => {
    const {
      data: {
        result: searchList,
      },
    } = (await API.delete("http://15.165.65.130/product/search", {
      params: { name: code },
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      }
    }));
    return searchList;
  }

  const deleteAllSearch = async () => {
    const {
      data: {
        result: searchList,
      },
    } = (await API.delete("http://15.165.65.130/product/search/all", {
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      }
    }));
    return searchList;
  }

  const getSearchProduct = async (code: string) => {
    const {
      data: {
        result: product,
      },
    } = (await API.post("http://15.165.65.130/product/search", null, {
      params: { name: code },
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      }
    })) as AxiosResponse<Product.SearchProductDto>;
  
    return product;
  };

  const getSearchList = async () => {
    const {
      data: {
        result: searchList,
      },
    } = (await API.get("http://15.165.65.130/product/search/recent", {
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      }
    }));
        return searchList;
    };

  return { deleteSearchList, deleteAllSearch, getSearchProduct, getSearchList };
};