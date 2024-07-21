import { CenterContainer, LargeImage } from "@/entities";

const SignInPage = () => {
  const kakaoSignInLink = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_KAKAO_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;

  const signInHandler = () => {
    window.location.href = kakaoSignInLink;
  };

  return (
    <>
      <CenterContainer>
        <LargeImage src="./image/logo.jpg" alt="logo"></LargeImage>
        <img
          src="./image/kakao_login_medium_wide.png"
          alt="signin"
          onClick={signInHandler}
        ></img>
      </CenterContainer>
    </>
  );
};

export default SignInPage;
