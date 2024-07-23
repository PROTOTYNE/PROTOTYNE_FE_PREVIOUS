import { MidContainer, Background, MidPointLine } from "@/entities";

import * as Styles from "./Styles";

const SignInPage = () => {
  const kakaoSignInLink = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_KAKAO_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;

  const signInHandler = () => {
    window.location.href = kakaoSignInLink;
  };

  return (
    <>
      <Background src="/background/signin.jpg" />
      <MidContainer>
        <Styles.Title>
          <Styles.LgText>앞서가는 당신을 위한</Styles.LgText>
          <Styles.LgText>특별한 기회</Styles.LgText>
          <Styles.XlText>Prototyne.</Styles.XlText>
        </Styles.Title>
        <MidPointLine />
        <img
          src="./image/kakao_login_medium_wide.png"
          alt="signin"
          onClick={signInHandler}
        ></img>
      </MidContainer>
    </>
  );
};

export default SignInPage;
