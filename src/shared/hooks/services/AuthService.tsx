import { AxiosResponse } from "axios";

import { API, setAccess, storeAccess, useUserStore } from "@/shared";

export const AuthService = () => {
  const userStore = useUserStore((state) => state);

  const signin = async (code: string) => {
    const {
      data: {
        result: { access_token, signupComplete },
      },
    } = (await API.get("/oauth2/login", {
      params: { code: code },
    })) as AxiosResponse<User.SignInResDto>;

    setAccess(access_token);
    storeAccess(access_token);

    return signupComplete;
  };

  const getUserInfo = async () => {
    const {
      data: {
        result: { detailInfo, addInfo },
      },
    } = (await API.get("/my/detail")) as AxiosResponse<User.GetUserResDto>;

    const birth = detailInfo.birth.split("-");

    userStore.setUserAllInfo({
      name: detailInfo.name,
      birthYear: birth[0],
      birthMonth: birth[1],
      birthDay: birth[2],
      gender: detailInfo.gender,
      familyNum: detailInfo.familyNum,
      ...addInfo,
    });
  };

  const signup = async () => {
    await API.post("/oauth2/signup", {
      detailRequest: {
        familyMember: userStore.familyNum,
        gender: userStore.gender,
        birth: `${userStore.birthYear}-${userStore.birthMonth}-${userStore.birthDay}`,
      },
      addInfoRequest: {
        occupation: userStore.occupation,
        income: userStore.income,
        interests: userStore.interests,
        familyComposition: userStore.familyComposition,
        productTypes: userStore.productTypes,
        phones: userStore.phones,
        healthStatus: userStore.healthStatus,
      },
    });
  };

  const getAlarms = async () => {
    const { data } = await API.get("/alarm");

    return data;
  };

  const updateBasicInfo = async () => {
    await API.post("/my/basicinfo", {
      familyMember: userStore.familyNum,
      gender: userStore.gender,
      birth: `${userStore.birthYear}-${userStore.birthMonth}-${userStore.birthDay}`,
    });
  };

  const updateAdditionalInfo = async () => {
    await API.post("/my/addinfo", {
      occupation: userStore.occupation,
      income: userStore.income,
      interests: userStore.interests,
      familyComposition: userStore.familyComposition,
      productTypes: userStore.productTypes,
      phones: userStore.phones,
      healthStatus: userStore.healthStatus,
    });
  };

  return {
    signin,
    getUserInfo,
    signup,
    getAlarms,
    updateBasicInfo,
    updateAdditionalInfo,
  };
};
