import React, { ReactNode } from "react";
import styled from "@emotion/styled";

// 전체 컨테이너
const Container = styled.div`
  position: absolute;
  left: 8.5px;
  top: 190px;
  width: 349px;
  height: 624px;
  padding: 12px;
  background-color: #f8f9ff;
  border-radius: 20px; /* 휘어짐 정도 조절 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 그림자 추가 (선택사항) */
`;

// 제목 텍스트
const Title = styled.h2`
  font-weight: bold;
  color: black;
  font-size: 16px;
`;

// 직선
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #8e8e8e;
  margin: 10px 0; /* 상하 여백 추가 */
`;

// ProductExContainer 컴포넌트 정의
interface ProductExContainerProps {
  title: string;
  children: ReactNode; // children 속성을 추가
}

export const ProductExContainer: React.FC<ProductExContainerProps> = ({
  title,
  children,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Divider />
      {children}
    </Container>
  );
};
