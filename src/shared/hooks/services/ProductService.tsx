import { getAccess } from "@/shared/configs/axios";
import axios from "axios";

interface ProductDetailResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    id: number;
    name: string;
    enterprise: string;
    category: string;
    reqTickets: number;
    imageUrls: string[];
    notes: string;
    contents: string;
    isBookmarked: boolean;
    dateInfo: {
      eventStart: string;
      eventEnd: string;
      releaseStart: string;
      releaseEnd: string;
      feedbackStart: string;
      feedbackEnd: string;
      judgeStart: string;
      judgeEnd: string;
      endDate: string;
    };
    investInfo: {
      apply: boolean;
      status: string;
      shipping: string;
      transportNum: string;
      penalty: boolean;
    };
  };
}

const API_BASE_URL = 'http://15.165.65.130';

export const ProductService = {
  getProduct: async (eventId: number): Promise<ProductDetailResponse> => {
    const response = await axios.get<ProductDetailResponse>(`${API_BASE_URL}/product/detail/${eventId}`, {
      headers: {
        'Authorization': getAccess(),
      }
    });

    return response.data;
  },
};
