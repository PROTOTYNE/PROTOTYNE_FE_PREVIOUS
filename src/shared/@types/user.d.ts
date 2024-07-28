declare namespace User {
  //DTO
  export interface SignInReqDto {
    signId: string;
    password: string;
  }

  export interface BasicInfo {
    name: string;
    birthYear: string;
    birthMonth: string;
    birthDay: string;
    gender: "MALE" | "FEMALE";
    familyNum: number;
  }

  export interface AdditionalInfo {
    occupation:
      | "STUDENT"
      | "OFFICE"
      | "PROFESSIONAL"
      | "SELFEMPLOYED"
      | "OTHER"
      | undefined;
    income: 2000 | 4000 | 6000 | 8000 | 9999 | undefined;
    interests:
      | "FITNESS"
      | "TRAVEL"
      | "READING&MOVIES"
      | "COOKING"
      | "GAMES"
      | undefined;
    familyComposition:
      | 1
      | "COUPLE"
      | "COUPLE&CHILDREN"
      | "PARENTS&CHILDREN"
      | "EXTENDFAMILY"
      | undefined;
    productType: (
      | "ELECTRONIC"
      | "FASHION&BEAUTY"
      | "FOOD"
      | "HOUSEHOLD"
      | "HEALTH"
    )[];
    phone: (
      | "SMARTPHONE1"
      | "SMARTPHONE2"
      | "SMARTPHONE9"
      | "TABLET"
      | "SMARTWATCH"
    )[];
    healthStatus: 1 | 2 | 3 | 4 | 5 | undefined;
  }

  //Store
  export interface UserStore {}
}
