import { API, getAccess } from "@/shared";

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

interface AllRequestedResultResponse {
  investmentId: number;
  eventId: number;
  productId: number;
  name: string;
  thumbnailUrl: string;
  calculatedStatus: ProductItemStatus;
  createdAt: string;
}

export async function getProductCount(): Promise<ProductCount> {
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
