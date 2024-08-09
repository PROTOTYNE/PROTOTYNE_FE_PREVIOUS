import {
  MidContainer,
  Background,
  MidPointLine,
  BottomImage,
} from "@/entities";

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
      <Styles.Container>
        <Background src="/background/first_loading.jpg" />
        <MidContainer>
          <div style={{ height: "130px" }}></div>
          <Styles.Title>
            <Styles.LgText>앞서가는 당신을 위한</Styles.LgText>
            <Styles.LgText>특별한 기회</Styles.LgText>
            <Styles.XlText>Prototyne.</Styles.XlText>
            <MidPointLine />
          </Styles.Title>
          <div style={{ height: "80px" }}></div>
        </MidContainer>
        <BottomImage src="/image/small_logo.png" alt="logo" />
        <Styles.SignInImg
          src="./image/kakao_login_medium_wide.png"
          alt="signin"
          onClick={signInHandler}
        ></Styles.SignInImg>
      </Styles.Container>
    </>
  );
};

export default SignInPage;
