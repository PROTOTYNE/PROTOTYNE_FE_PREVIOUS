import { API, getAccess } from "@/shared";

// 1. 티켓 개수 조회 API
interface TicketCountResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    ticketNumber: number;
  };
}

export async function getTicketCount() {
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

export async function getTicketUsed(startDate: string, endDate: string) {
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

export async function getAllTickets(startDate: string, endDate: string) {
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
