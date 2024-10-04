import { AxiosResponse } from "axios";

import { API, getAccess, storeAccess, useUserStore } from "@/shared";

export interface ProductCount {
  applied: number;
  ongoing: number;
  winning: number;
  completed: number;
}

export enum StatusType {
  applied = "신청",
  ongoing = "진행중",
  winning = "당첨",
  reposrt = "후기작성",
  completed = "종료",
}

enum ProductItemStatus {
  winning = "당첨",
  not_winning = "미당첨",
}

interface APIResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: any;
}

// 1. 티켓 개수 조회 API
interface TicketCountResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    ticketNumber: number;
  };
}

interface AllRequestedResultResponse {
  investmentId: number;
  eventId: number;
  productId: number;
  name: string;
  thumbnailUrl: string;
  calculatedStatus: ProductItemStatus;
  createdAt: string;
}

// 2. 티켓 사용 내역 조회 API
interface TicketUsedResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    createdAt: string;
    name: string;
    ticketDesc: string;
    ticketChange: number;
  }[];
}

// 3. 티켓 전체 내역 조회 API
interface TicketAllResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    createdAt: string;
    name: string;
    ticketDesc: string;
    ticketChange: number;
  }[];
}

interface PrizeInfoResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: Array<{
    commonInfo: {
      name: string;
    };
  }>;
}

interface DeliveryStatusResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: Array<{
    shipping: string;
    transportNum: string;
    feedbackStart: string;
    feedbackEnd: string;
    commonInfo: {
      name: string;
    };
  }>;
}

export const UserService = () => {
  async function getProductCount(): Promise<ProductCount> {
    const accessToken = await getAccess();

    const response = await API.get(`/myproduct/allrequested`, {
      headers: {
        Authorization: accessToken,
      },
    });

    var productCountResult = {
      applied: 0,
      ongoing: 0,
      winning: 0,
      completed: 0,
    };

    if (response.status != 200) {
      console.warn(
        `Product 정보 조회 실패. status=${response.status} data=${response.data}`
      );
      return productCountResult;
    }

    const responseData = response.data as APIResponse;

    if (responseData.isSuccess) {
      const results = responseData.result as AllRequestedResultResponse[];

      // TODO [P1] 상태 계산 로직 수정 필요
      results.forEach((data) => {
        if (data.calculatedStatus === "당첨") {
          productCountResult.winning += 1;
        } else if (data.calculatedStatus === "미당첨") {
          productCountResult.completed += 1;
        } else {
          productCountResult.applied += 1;
        }
      });
    }

    return productCountResult;
  }

  async function getTicketCount() {
    try {
      const accessToken = await getAccess();
      const response = await API.get("/ticket", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const data: TicketCountResponse = response.data;
      if (!data.isSuccess) {
        console.warn(
          `Failed to fetch ticket count. Code: ${data.code}, Message: ${data.message}`
        );
        return null;
      }

      // 티켓 개수를 반환
      return data.result.ticketNumber;
    } catch (error) {
      console.error("Error fetching ticket count:", error);
      return null;
    }
  }

  async function getTicketUsed(startDate: string, endDate: string) {
    try {
      const accessToken = await getAccess();
      const response = await API.get("/ticket/used", {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: { startDate, endDate }, // 날짜를 전달
      });

      const data: TicketUsedResponse = response.data;

      if (!data.isSuccess) {
        console.warn(
          `Failed to fetch used tickets. Code: ${data.code}, Message: ${data.message}`
        );
        return 0;
      }

      // 티켓 사용 내역을 반환
      return data.result.length;
    } catch (error) {
      console.error("Error fetching used tickets:", error);
      return 0;
    }
  }

  async function getAllTickets(startDate: string, endDate: string) {
    try {
      const accessToken = await getAccess();
      const response = await API.get("/ticket/all", {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: { startDate, endDate }, // 날짜를 전달
      });

      const data: TicketAllResponse = response.data;

      if (!data.isSuccess) {
        console.warn(
          `Failed to fetch all tickets. Code: ${data.code}, Message: ${data.message}`
        );
        return [];
      }

      // 전체 티켓 내역을 반환
      return data.result;
    } catch (error) {
      console.error("Error fetching all tickets:", error);
      return [];
    }
  }

  async function getPrizeInfo() {
    try {
      const accessToken = await getAccess();
      const response = await API.get("/prize/info", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const data: PrizeInfoResponse = response.data;

      if (!data.isSuccess) {
        console.warn(
          `Failed to fetch prize info. Code: ${data.code}, Message: ${data.message}`
        );
        return null;
      }

      // 필요한 정보를 추출
      const result = data.result[0];
      const { name } = result.commonInfo;

      return { name };
    } catch (error) {
      console.error("Error fetching prize info:", error);
      return null;
    }
  }

  async function getDeliveryStatus() {
    try {
      const accessToken = await getAccess();
      const response = await API.get("/delivery/status", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const data: DeliveryStatusResponse = response.data;

      if (!data.isSuccess) {
        console.warn(
          `Failed to fetch delivery status. Code: ${data.code}, Message: ${data.message}`
        );
        return null;
      }

      // 필요한 정보를 추출
      const result = data.result[0];
      const { shipping, transportNum, feedbackStart, feedbackEnd, commonInfo } =
        result;
      const { name } = commonInfo;

      return {
        shipping,
        transportNum,
        feedbackPeriod: `${feedbackStart} ~ ${feedbackEnd}`, // Format review period
        name,
      };
    } catch (error) {
      console.error("Error fetching delivery status:", error);
      return null;
    }
  }

  return {
    getPrizeInfo,
    getProductCount,
    getAllTickets,
    getTicketUsed,
    getTicketCount,
    getDeliveryStatus,
  };
};
