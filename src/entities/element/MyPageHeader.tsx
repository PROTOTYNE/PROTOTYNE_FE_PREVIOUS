// MyPageHeader.tsx
import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 375px;
  height: 52px;
  background-color: #7995b2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const BackIcon = styled.div`
  position: absolute;
  left: 16px;
  font-size: 24px;
  color: white;
`;

const Title = styled.span`
  color: white;
  font-weight: 600; /* Semi-bold */
  font-size: 16px;
`;

interface MyPageHeaderProps {
  title: string;
}

export const MyPageHeader: React.FC<MyPageHeaderProps> = ({ title }) => {
  return (
    <Container>
      <BackIcon>&lt;</BackIcon>
      <Title>{title}</Title>
    </Container>
  );
};
