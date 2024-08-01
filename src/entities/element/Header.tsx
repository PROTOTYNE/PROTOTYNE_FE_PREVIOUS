import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const Header = ({
  children,
  onBack,
  background,
}: {
  children: React.ReactNode;
  onBack?: boolean;
  background?: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <>
      {background ? <BackGround /> : null}
      <Container>
        {onBack ? (
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
  height: 70px;

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

  margin-top: 20px;

  font-size: 23px;

  z-index: 11;

  > * {
    margin-bottom: 10px;
  }
`;

const BackButton = styled(ArrowBackIosNewIcon)`
  position: absolute;
  top: 1px;
  left: 18px;
`;
