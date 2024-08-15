import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { MidContainer } from "@/entities";

export const Container = styled(MidContainer)`
  top: 50%;
  width: 345px;

  align-items: flex-start;
`;

export const Title = styled.div`
  width: 100%;

  position: relative;
  font-weight: bold;
  font-size: 23px;

  margin-top: 20px;

  > svg {
    position: absolute;
    right: 0px;
    top: 10px;
    font-size: 20px;
    color: #c4c4c4;
  }
`;

export const OnTitle = styled(Title)`
  > svg {
    color: #152662;
  }
`;

export const SubTitle = styled.div`
  font-size: 16px;

  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Element = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  margin-top: 12px;

  color: black;
  text-decoration: none;
  font-size: 18px;

  > span {
    color: #152662;
    margin-right: 10px;
  }

  > svg {
    position: absolute;
    right: 0px;
    font-size: 20px;
    color: #c4c4c4;
  }
`;

export const OnElement = styled(Element)`
  > svg {
    color: #152662;
  }
`;

export const LinkIcon = styled(ArrowForwardIosIcon)`
  margin-top: 6px;
  margin-left: 10px;

  font-size: 18px;
`;

export const Ladel = styled.div`
  font-weight: bold;
  font-size: 16px;

  margin-top: 10px;
`;

export const ScrollArea = ({ children }: { children: React.ReactNode }) => (
  <div style={{ position: "relative" }}>
    <ScrollBox>
      <ScrollContainer>{children}</ScrollContainer>
      <div style={{ height: "30px" }}></div>
    </ScrollBox>
  </div>
);

const ScrollBox = styled.div`
  position: relative;
  background-color: #ffffffbe;

  width: calc(100% - 16px);
  height: 60vh;

  margin-top: 10px;

  border-radius: 4px;

  overflow-y: scroll;

  padding-top: 20px;
  padding-left: 5px;
  padding-right: 5px;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #152662b7;

    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #dcdcdc;

    border-radius: 5px;
  }
`;

const ScrollContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BackButton = styled(ArrowBackIosNewIcon)`
  position: absolute;
  top: 26px;
  left: 30px;
  z-index: 100;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

export const NameInput = styled.input`
  margin-top: 10px;
  margin-bottom: 15px;

  width: calc(100% - 10px);

  height: 30px;

  border: 1px solid #c4c4c4;

  border-radius: 7px;

  font-size: 16px;

  padding-left: 10px;
`;

export const BirthInput = styled(NameInput)`
  margin-left: 2%;
  margin-right: 2%;

  text-align: center;

  padding-left: 0px;

  ::placeholder {
    text-align: center;

    font-size: 16px;
  }
`;

export const GenderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  margin-bottom: 15px;

  background-color: #ffffff;

  width: 35%;

  margin-left: 10%;

  height: 30px;
  border-radius: 7px;

  border: 1px solid #c4c4c4;
`;

export const FamilyNum = styled(GenderButton)`
  margin-left: 1%;
  margin-right: 1%;
  width: 30%;
`;

export const FamilyNumButton = styled(FamilyNum)`
  font-weight: bold;
  color: #152662;

  width: 30px;
  background-color: #c4c4c4;
`;

export const SelectedGenderButton = styled(GenderButton)`
  background-color: #24446b;

  color: white;
`;
