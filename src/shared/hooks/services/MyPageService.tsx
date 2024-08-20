import { API } from "@/shared";
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

  return { getMyProductsApplied, getMyProductsAllRequested };
};
