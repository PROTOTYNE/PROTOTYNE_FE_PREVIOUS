import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const Header = ({
  children,
  onBack,
  background,
  styled,
  colorBackground,
}: {
  children: React.ReactNode;
  onBack?: boolean;
  background?: boolean;
  styled?: boolean;
  colorBackground?: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <>
      {background ? <BackGround /> : null}
      {styled ? <StyledContioner /> : null}
      {colorBackground ? <ColorBackGround /> : null}
      <Container style={{ color: styled ? "white" : "none" }}>
        {onBack && colorBackground ? (
          <WhiteBackButton />
        ) : onBack ? (
          <BackButton
            onClick={() => {
              navigate(-1);
            }}
          />
        ) : null}
        {children}
      </Container>
    </>
  );
};

const BackGround = styled.div`
  background-color: white;
  width: 100%;
  height: 54px;

  position: fixed;
  top: 0px;
  left: 0px;

  z-index: 10;
`;

const ColorBackGround = styled.div`
  background: linear-gradient(to right, #7995b2 0%, #476090 51%, #0d1b4a 100%);

  width: 100%;
  height: 54px;

  position: fixed;
  top: 0px;
  left: 0px;

  z-index: 10;
`;

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10px;

  font-size: 23px;

  z-index: 11;

  > * {
    margin-bottom: 10px;
  }
`;

const StyledContioner = styled.div`
  background-image: url("/background/first_loading.jpg");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 54px;
  width: 100%;

  position: fixed;
  top: 0px;
  left: 0px;

  color: white;

  z-index: 10;
`;

const BackButton = styled(ArrowBackIosNewIcon)`
  position: absolute;
  top: 5px;
  left: 30px;
`;

const WhiteBackButton = styled(BackButton)`
  color: white;
`;
