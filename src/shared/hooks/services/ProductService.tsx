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


export const ProductService = {
  getProduct: async (eventId: string): Promise<ProductDetailResponse> => {
    const response = await axios.get<ProductDetailResponse>(`/product/detail/${eventId}`);
    return response.data;
  },
};
