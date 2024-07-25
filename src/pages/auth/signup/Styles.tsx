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
  font-weight: bold;
  font-size: 23px;

  margin-top: 20px;
`;

export const SubTitle = styled.div`
  font-size: 16px;

  margin-top: 10px;
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  margin-top: 12px;

  color: black;
  text-decoration: none;
  font-size: 18px;

  > span {
    color: #6482eb;
    margin-right: 10px;
  }
`;

export const LinkIcon = styled(ArrowForwardIosIcon)`
  margin-top: 1px;
  margin-left: 10px;

  font-size: 18px;
`;

export const Ladel = styled.div`
  font-weight: bold;
  font-size: 16px;

  margin-top: 10px;
`;
