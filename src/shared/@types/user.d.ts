declare namespace User {
  export type Alarms = {
    thumbnailUrl: string;
    title: string;
    contents: string;
    dateAgo: number;
  }[];

  export interface Delivery {
    deliveryName: string;
    deliveryPhone: string;
    baseAddress: string;
    detailAddress: string;
  }

  export interface BasicInfo {
    name: string;
    birthYear: string;
    birthMonth: string;
    birthDay: string;
    gender: "MALE" | "FEMALE";
    familyNum: number;
  }

  export type Interest =
    | "FITNESS"
    | "TRAVEL"
    | "READING&MOVIES"
    | "COOKING"
    | "GAMES";

  export type ProductType =
    | "ELECTRONIC"
    | "FASHION&BEAUTY"
    | "FOOD"
    | "HOUSEHOLD"
    | "HEALTH";

  export type Phone =
    | "SMARTPHONE1"
    | "SMARTPHONE2"
    | "SMARTPHONE9"
    | "TABLET"
    | "SMARTWATCH";

  export interface AdditionalInfo {
    occupation:
      | "STUDENT"
      | "OFFICE"
      | "PROFESSIONAL"
      | "SELFEMPLOYED"
      | "OTHER"
      | undefined;
    income: 2000 | 4000 | 6000 | 8000 | 9999 | undefined;
    interests: Interests[];
    familyComposition:
      | "1"
      | "COUPLE"
      | "COUPLE&CHILDREN"
      | "PARENTS&CHILDREN"
      | "EXTENDFAMILY"
      | undefined;
    productTypes: ProductType[];
    phones: Phone[];
    healthStatus: 1 | 2 | 3 | 4 | 5 | undefined;
  }

  export interface AllInfo extends BasicInfo, AdditionalInfo {}

  //Store
  export interface UserStore extends BasicInfo, AdditionalInfo {
    setUserAllInfo: (value: AllInfo) => void;
    getUserAllInfo: () => AllInfo;
    setName: (value: string) => void;
    setBirthYear: (value: string) => void;
    setBirthMonth: (value: string) => void;
    setBirthDay: (value: string) => void;
    setGender: (value: BasicInfo[geder]) => void;
    upFamilyNum: () => void;
    downFamilyNum: () => void;
    setOccupation: (value: AdditionalInfo[occupation]) => void;
    setIncome: (value: AdditionalInfo[income]) => void;
    setInterests: (value: AdditionalInfo[interests]) => void;
    addInterest: (value: Interests) => void;
    deleteInterest: (value: Interests) => void;
    setFamilyComposition: (value: AdditionalInfo[familyComposition]) => void;
    setProductTypes: (value: AdditionalInfo[productType]) => void;
    addProductType: (value: ProductType) => void;
    deleteProductType: (value: ProductType) => void;
    setPhones: (value: AdditionalInfo[phone]) => void;
    addPhone: (value: Phone) => void;
    deletePhone: (value: Phone) => void;
    setHealthStatus: (value: AdditionalInfo[healthStatus]) => void;
  }

  //DTO
  export interface SignInResDto {
    result: {
      signupComplete: boolean;
      token_type: string;
      access_token: string;
    };
  }

  export interface GetUserResDto {
    result: {
      username: string;
      detailInfo: {
        birth: string;
        gender: "MALE" | "FEMALE";
        familyMember: number;
      };
      addInfo: AdditionalInfo;
    };
  }

  export interface GetAlarmsResDto {
    result: {
      title: string;
      contents: string;
      dateAgo: number;
      thumbnailUrl: string;
    }[];
  }

  export interface GetDelivery {
    result: Delivery;
  }
}
