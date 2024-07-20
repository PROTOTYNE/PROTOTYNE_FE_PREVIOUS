import { useEffect } from "react";

const RedirectPage = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  useEffect(() => {
    //서버로 인가 코드 전송
    //Home으로 route 변경
  });

  return <>SignIn...</>;
};

export default RedirectPage;
