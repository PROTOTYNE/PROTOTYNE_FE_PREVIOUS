import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PAGE_URL } from "@/shared";

const RedirectPage = () => {
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  useEffect(() => {
    //서버로 인가 코드 전송
    navigate(PAGE_URL.Home);
    //첫 로그인인 경우 sign up으로 라우팅
  });

  return <>SignIn...</>;
};

export default RedirectPage;
