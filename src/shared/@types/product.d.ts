declare namespace Product {
  export interface DateInfo {
    eventStart: string;
    eventEnd: string;
    releaseStart: string;
    releaseEnd: string;
    feedbackStart: string;
    feedbackEnd: string;
    judgeStart: string;
    judgeEnd: string;
    endDate: string;
  }

  export interface InvestInfo {
    apply: boolean;
    status: string;
    shipping: string;
    transportNum: string;
    penalty: boolean;
  }

  export interface Result {
    id: number;
    name: string;
    enterprise: string;
    category: string;
    reqTickets: number;
    imageUrls: string[];
    notes: string;
    contents: string;
    isBookmarked: boolean;
    dateInfo: DateInfo;
    investInfo: InvestInfo;
  }

  export interface GetProductDetailResDto {
    isSuccess: boolean;
    code: string;
    message: string;
    result: Result;
  }
}
