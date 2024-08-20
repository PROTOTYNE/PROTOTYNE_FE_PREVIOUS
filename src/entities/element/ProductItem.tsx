// import { API, getAccess } from "@/shared";

// // Adjusted PrizeInfo API Function
// interface PrizeInfoResponse {
//   isSuccess: boolean;
//   code: string;
//   message: string;
//   result: Array<{
//     commonInfo: {
//       name: string;
//     };
//   }>;
// }

// export async function getPrizeInfo() {
//   try {
//     const accessToken = await getAccess();
//     const response = await API.get("/prize/info", {
//       headers: { Authorization: `Bearer ${accessToken}` },
//     });

//     const data: PrizeInfoResponse = response.data;

//     if (!data.isSuccess) {
//       console.warn(
//         `Failed to fetch prize info. Code: ${data.code}, Message: ${data.message}`
//       );
//       return null;
//     }

//     // Return only the name or other needed information
//     const result = data.result[0];
//     const { name } = result.commonInfo;

//     return { name };
//   } catch (error) {
//     console.error("Error fetching prize info:", error);
//     return null;
//   }
// }

// // Adjusted DeliveryStatus API Function
// interface DeliveryStatusResponse {
//   isSuccess: boolean;
//   code: string;
//   message: string;
//   result: Array<{
//     shipping: "배송 준비중" | "배송중" | "배송 완료";
//     transportNum: string;
//     feedbackStart: string;
//     feedbackEnd: string;
//     commonInfo: {
//       name: string;
//     };
//   }>;
// }

// export async function getDeliveryStatus() {
//   try {
//     const accessToken = await getAccess();
//     const response = await API.get("/delivery/status", {
//       headers: { Authorization: `Bearer ${accessToken}` },
//     });

//     const data: DeliveryStatusResponse = response.data;

//     if (!data.isSuccess) {
//       console.warn(
//         `Failed to fetch delivery status. Code: ${data.code}, Message: ${data.message}`
//       );
//       return null;
//     }

//     const result = data.result[0];
//     const { shipping, transportNum, feedbackStart, feedbackEnd } = result;

//     // Return all necessary details
//     return {
//       shipping,
//       transportNum,
//       feedbackPeriod: `${feedbackStart} ~ ${feedbackEnd}`, // Format the review period
//     };
//   } catch (error) {
//     console.error("Error fetching delivery status:", error);
//     return null;
//   }
// }
