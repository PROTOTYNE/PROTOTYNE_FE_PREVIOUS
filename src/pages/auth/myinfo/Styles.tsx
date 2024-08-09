import styled from "@emotion/styled";
import { MidContainer, Container } from "@/entities";

export const TopContainer = styled(MidContainer)`
  width: 90%;
  height: 90vh;
`;

export const Name = styled.div`
  font-weight: bold;

  width: 100%;

  font-size: 26px;
`;

export const Title = styled.div`
  position: relative;
  font-size: 22px;
  font-weight: bold;

  width: 100%;

  margin-top: 15px;
  margin-bottom: 8px;

  > span {
    position: absolute;

    bottom: 0px;
    right: 0px;

    color: #667197;
    font-weight: lighter;
    font-size: 18px;
  }
`;

export const SubTitle = styled.div`
  width: 95%;
  color: gray;
  font-size: 16px;
`;

export const InfoContianer = styled(Container)`
  width: 100%;
  height: 15%;
  background-color: white;
  border-radius: 10px;
`;

export const AdditionalInfoContainer = styled(InfoContianer)`
  height: 50%;
`;

export const Info = styled.div`
  padding-left: 13px;

  position: relative;
  width: 100%;
  font-size: 17px;

  margin-top: 3px;
  margin-bottom: 3px;

  font-weight: bold;

  > span {
    font-weight: normal;
    position: absolute;
    left: 47%;
  }
`;

export const MultiInfo = styled(Info)`
  height: 45px;
  > span {
    position: absolute;
    font-weight: normal;

    left: 12px;
    top: 23px;
  }
`;
