declare namespace Product {

  export interface DateDto {
    result: {
      "eventStart": string,
      "eventEnd": string,
      "releaseStart": string,
      "releaseEnd": string,
      "feedbackStart": string,
      "feedbackEnd": string,
      "judgeStart": string,
      "judgeEnd": string,
      "endDate": string
    },
  }

  export interface InvestDto {
    result: {
      "apply": boolean,
      "status": string,
      "shipping": string,
      "transportNum": string,
      "penalty": boolean
    }
  }

  export interface ResultDto {
    result: {
      "id": number,
      "name": string,
      "enterprise": string,
      "category": string,
      "reqTickets": number,
      "imageUrls": string[],
      "notes": string,
      "contents": string,
      "isBookmarked": boolean,
    }
  }  
}
