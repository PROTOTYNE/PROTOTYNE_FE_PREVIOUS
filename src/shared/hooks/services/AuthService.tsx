import { AxiosResponse } from "axios";

import styled from "@emotion/styled/macro";

import { API, setAccess } from "@/shared";

export const AuthService = () => {
  const signin = async (code: string) => {
    const {
      data: {
        result: { access_token, newUser },
      },
    } = (await API.get("/oauth2/login", {
      params: { code: code },
    })) as AxiosResponse<User.SignInResDto>;

    setAccess(access_token);

    return newUser;
  };

  return { signin };
};
