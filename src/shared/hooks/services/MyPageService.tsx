import { API, getAccess } from "@/shared";

export const MyPageService = () => {

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

  return {getProgress};
};
