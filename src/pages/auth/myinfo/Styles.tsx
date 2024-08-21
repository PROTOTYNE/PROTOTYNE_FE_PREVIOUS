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

    bottom: 1px;
    right: 0px;

    color: #667197;
    font-weight: lighter;
    font-size: 18px;
  }
`;

export const SubTitle = styled.div`
  color: gray;
  font-size: 14px;

  width: calc(100% - 30px);
`;

export const InfoContianer = styled(Container)`
  width: 100%;
  height: 15%;

  background-color: white;
  border-radius: 8px;
`;

export const AdditionalInfoContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ScrollBox>
    <ScrollContainer>{children}</ScrollContainer>
  </ScrollBox>
);

const ScrollBox = styled(InfoContianer)`
  height: 40vh;

  overflow-y: auto;

  border-top: 10px solid white;
  border-bottom: 10px solid white;

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

  padding-top: 30px;
`;

export const Info = styled.div`
  position: relative;
  width: calc(100% - 30px);
  font-size: 15px;

  margin-top: 5px;
  margin-bottom: 5px;

  font-weight: bold;

  > span {
    color: #555555;
    font-weight: normal;
    position: absolute;
    left: 50%;
  }
`;

export const Address = styled.div`
  width: calc(100% - 30px);

  > span {
    font-weight: bold;
  }
`;

export const MultiInfo = styled(Info)`
  height: 45px;
  > span {
    position: absolute;
    font-weight: normal;

    left: 0px;
    top: 23px;
  }
`;
