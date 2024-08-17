import { AxiosResponse } from "axios";

import { API, getAccess, setAccess } from "@/shared";

export const SearchService = () => {

  const deleteSearchList = async (code: string) => {
    const {
      data: {
        result: searchList,
      },
    } = (await API.delete("/product/search", {
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
    } = (await API.delete("/product/search/all", {
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
    } = (await API.post("/product/search", null, {
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
    } = (await API.get("/product/search/recent", {
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      }
    }));
      return searchList;
    };

  const getCategoryList = async (code: string) => {
    const {
      data: {
        result: categoryList,
      },
    } = (await API.get("/product/select", {
      params: { category: code },
    })) as AxiosResponse<Product.CategoryListDto>;
    return categoryList;
  }

  return { deleteSearchList, deleteAllSearch, getSearchProduct, getSearchList, getCategoryList };
};