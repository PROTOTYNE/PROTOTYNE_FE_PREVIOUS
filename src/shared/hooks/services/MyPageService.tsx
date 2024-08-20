import { API, getAccess } from "@/shared";
import { AxiosResponse } from "axios";


export const MyPageService = () => {

  const getMyProductsApplied = async () => {
    const {
      data: { result },
    } = (await API.get(
      "/myproduct/applied"
    )) as AxiosResponse<User.GetMyProductsApplied>;

    return result;
  };

  const getMyProductsAllRequested = async () => {
    const {
      data: { result },
    } = (await API.get(
      "/myproduct/allrequested"
    )) as AxiosResponse<User.GetMyProductsApplied>;

    return result;
  };

  const getProgress = async () => {
    const {
      data: {
        result: progressProduct,
      },
    } = (await API.get("/myproduct/ongoing", {
      headers: {
        "Authorization": getAccess(),
      }
    }));
    return progressProduct;
  }

  return { getProgress, getMyProductsApplied, getMyProductsAllRequested };
};
