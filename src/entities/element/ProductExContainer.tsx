import React, { ReactNode } from "react";
import styled from "@emotion/styled";

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
    <>
      <Title>{title}</Title>
      <Divider />
      {children}
    </>
  );
};
