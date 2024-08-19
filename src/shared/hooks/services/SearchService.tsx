import { AxiosResponse } from "axios";

import { API, getAccess } from "@/shared";

export const SearchService = () => {

  const deleteSearchList = async (code: string) => {
    const {
      data: {
        result: searchList,
      },
    } = (await API.delete("/search", {
      params: { name: code },
      headers: {
        "Authorization": getAccess(),
      }
    }));
    return searchList;
  }

  const deleteAllSearch = async () => {
    const {
      data: {
        result: searchList,
      },
    } = (await API.delete("/search/all", {
      headers: {
        "Authorization": getAccess(),
      }
    }));
    return searchList;
  }

  const getSearchProduct = async (code: string) => {
    const {
      data: {
        result: product,
      },
    } = (await API.post("/search", null, {
      params: { name: code },
      headers: {
        "Authorization": getAccess(),
      }
    })) as AxiosResponse<Product.SearchProductDto>;
  
    return product;
  };

  const getSearchList = async () => {
    const {
      data: {
        result: searchList,
      },
    } = (await API.get("/search/recent", {
      headers: {
        "Authorization": getAccess(),
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