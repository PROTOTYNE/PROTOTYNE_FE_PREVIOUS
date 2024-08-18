import { AxiosResponse } from "axios";

import { API, setAccess, storeAccess, useUserStore } from "@/shared";

export const AuthService = () => {
  const setUserAllInfo = useUserStore((state) => state.setUserAllInfo);

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

    setUserAllInfo({
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
    //const { data } = await API.post("/oauth2/signup");
  };

  return { signin, getUserInfo };
};
