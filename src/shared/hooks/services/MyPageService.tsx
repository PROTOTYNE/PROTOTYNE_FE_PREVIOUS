import { API, getAccess } from "@/shared";
import { AxiosResponse } from "axios";

export const MyPageService = () => {
  const getSelectedProduct = async () => {
    const {
      data: { result },
    } = (await API.get("/myproduct/selected", {
      headers: {
        Authorization: getAccess(),
      },
    })) as AxiosResponse<User.GetMyProductsSelected>;

    return result;
  };

  const getMyProductsApplied = async () => {
    const {
      data: { result },
    } = (await API.get("/myproduct/applied", {
      headers: {
        Authorization: getAccess(),
      },
    })) as AxiosResponse<User.GetMyProductsApplied>;

    return result;
  };

  const getMyProductsAllRequested = async () => {
    const {
      data: { result },
    } = (await API.get("/myproduct/allrequested", {
      headers: {
        Authorization: getAccess(),
      },
    })) as AxiosResponse<User.GetMyProductsApplied>;

    return result;
  };

  const getAllRequested = async () => {
    const {
      data: { result: allRequestedProduct },
    } = await API.get("/myproduct/allrequested", {
      headers: {
        Authorization: getAccess(),
      },
    });
    return allRequestedProduct;
  };

  const getOngoing = async () => {
    const {
      data: { result: progressProduct },
    } = (await API.get("/myproduct/ongoing", {
      headers: {
        Authorization: getAccess(),
      },
    })) as AxiosResponse<User.GetMyProductsOngoing>;

    console.log(progressProduct);

    return progressProduct;
  };

  const getCompleted = async () => {
    const {
      data: { result: completedProduct },
    } = (await API.get("/myproduct/completed", {
      headers: {
        Authorization: getAccess(),
      },
    })) as AxiosResponse<User.GetMyProductsCompleted>;
    return completedProduct;
  };

  return {
    getSelectedProduct,
    getAllRequested,
    getCompleted,
    getOngoing,
    getMyProductsApplied,
    getMyProductsAllRequested,
  };
};
