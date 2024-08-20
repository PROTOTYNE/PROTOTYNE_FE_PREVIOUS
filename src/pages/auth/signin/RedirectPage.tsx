import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "@/entities";
import { PAGE_URL, AuthService } from "@/shared";

const RedirectPage = () => {
  const navigate = useNavigate();
  const { signin, getUserInfo } = AuthService();

  const signinHandler = async (code: string) => {
    const signupComplete = await signin(code);

    if (!signupComplete) navigate(PAGE_URL.SignUp);
    else {
      await getUserInfo();
      navigate(PAGE_URL.Home);
    }
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (code) {
      signinHandler(code);
    } else navigate(PAGE_URL.SignIn);
  });

  return <Loading />;
};

export default RedirectPage;
