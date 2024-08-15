// ProductInfoContainer.tsx
import styled from "@emotion/styled";
import React from 'react';

// styled-components를 사용하여 스타일 정의
const Container = styled.div`
  background: white;
  width: 330px;
  height: 1000px;
  border-radius: 15px 15px 0 0;
  margin: 20px 5px; /* 상하 여백은 20px, 좌우 여백은 5px */
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ProductInfoContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

// ProductInfoContainer를 내보내기
export { ProductInfoContainer };
