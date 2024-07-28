import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
