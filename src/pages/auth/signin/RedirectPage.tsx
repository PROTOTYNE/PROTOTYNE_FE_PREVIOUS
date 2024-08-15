import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PAGE_URL, AuthService } from "@/shared";

const RedirectPage = () => {
  const navigate = useNavigate();
  const { signin } = AuthService();

  const signinHandler = async (code: string) => {
    const newUser = await signin(code);

    if (newUser) navigate(PAGE_URL.SignUp);
    else navigate(PAGE_URL.Home);
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (code) {
      signinHandler(code);
    } else navigate(PAGE_URL.SignIn);
  });

  return <>SignIn...</>;
};

export default RedirectPage;
