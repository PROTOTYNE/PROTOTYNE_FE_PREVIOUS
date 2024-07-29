import {
  MidContainer,
  Background,
  MidPointLine,
  BottomImage,
} from "@/entities";

import * as Styles from "./Styles";
import { FirstLoading } from "./FirstLoading";

import { LargeImage } from "@/entities";

const SignInPage = () => {
  const kakaoSignInLink = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_KAKAO_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;

  const signInHandler = () => {
    window.location.href = kakaoSignInLink;
  };

  return (
    <>
      <FirstLoading />
      <Background src="/background/signin.jpg" />
      <MidContainer>
        <Styles.MdText>당신의 선택으로, 당신의 취향으로</Styles.MdText>
        <LargeImage
          src="./image/logo.png"
          style={{ filter: "brightness(100)" }}
        ></LargeImage>
      </MidContainer>
      <Styles.SignInImg
        src="./image/kakao_login_medium_wide.png"
        alt="signin"
        onClick={signInHandler}
      ></Styles.SignInImg>
    </>
  );
};

export default SignInPage;
