import { API, getAccess } from "@/shared";

////1. 당첨 상품 정보 추출 함수
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
  
  export async function getPrizeInfo() {
    try {
      const accessToken = await getAccess();
      const response = await API.get('/prize/info', {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
  
      const data: PrizeInfoResponse = response.data;
  
      if (!data.isSuccess) {
        console.warn(`Failed to fetch prize info. Code: ${data.code}, Message: ${data.message}`);
        return null;
      }
  
      // 필요한 정보를 추출
      const result = data.result[0];
      const { name } = result.commonInfo;
  
      return { name };
    } catch (error) {
      console.error('Error fetching prize info:', error);
      return null;
    }
  }
  

// 2. 배송 상태와 송장 번호 추출 함수

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

export async function getDeliveryStatus() {
  try {
    const accessToken = await getAccess();
    const response = await API.get('/delivery/status', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    const data: DeliveryStatusResponse = response.data;

    if (!data.isSuccess) {
      console.warn(`Failed to fetch delivery status. Code: ${data.code}, Message: ${data.message}`);
      return null;
    }

    // 필요한 정보를 추출
    const result = data.result[0];
    const { shipping, transportNum, feedbackStart, feedbackEnd, commonInfo } = result;
    const { name } = commonInfo;

    return {
      shipping,
      transportNum,
      feedbackPeriod: `${feedbackStart} ~ ${feedbackEnd}`,  // Format review period
      name
    };
  } catch (error) {
    console.error('Error fetching delivery status:', error);
    return null;
  }
}