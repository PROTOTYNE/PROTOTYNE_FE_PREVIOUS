import React from 'react';
import styled from '@emotion/styled';

interface ProductInfoProps {
  productName: string;
  productDescription: string;
  additionalNotes: string;
}

const ProductInfoContainer = styled.div`
  margin: 0 20px 50px;
`;

const InfoTitle = styled.h3`
  font-weight: bold;
  /* 기타 스타일 */
`;

const InfoContent = styled.div`
  /* 내용 부분 스타일 */
`;

const ProductInfo: React.FC<ProductInfoProps> = ({ productName, productDescription, additionalNotes }) => {
  return (
    <ProductInfoContainer>
      <div>
        <InfoTitle>제공 시제품</InfoTitle>
        <InfoContent>{productName}</InfoContent>
      </div>
      <div>
        <InfoTitle>설명</InfoTitle>
        <InfoContent>{productDescription}</InfoContent>
      </div>
      <div>
        <InfoTitle>추가 안내사항</InfoTitle>
        <InfoContent>{additionalNotes}</InfoContent>
      </div>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
