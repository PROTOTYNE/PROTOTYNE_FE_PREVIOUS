import React from "react";
import styled from "@emotion/styled";
import ticket from "../../../../public/image/ticket.svg";

interface ProductProps {
  category: string;
  company: string;
  quantity: number;
  name: string;
}

const ProductContainer = styled.div`
  margin: 0 20px;
`;

const ProductCategory = styled.div`
  display: inline-block;
  margin-top: 15px;
  padding: 2px 8px;
  border: none;
  border-radius: 7px;
  /* new_logo */
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #24446b;
  border-radius: 7px;
  font-family: "Inter";

  color: #ffffff;
`;

const ProductName = styled.div`
  margin-top: 8px;
  font-family: "Inter";
  font-weight: 700;
  font-size: 23px;

  color: #2e2e2e;
`;

const ProductCompany = styled.div`
  margin-top: 7px;
  font-family: "Inter";
  font-size: 15px;
  line-height: 18px;

  color: #2e2e2e;
`;

const ProductTicket = styled.div`
  text-align: right;
  font-family: "Inter";
  font-size: 13px;
  color: #667197;
`;

const TicketIcon = styled.img`
  position: relative;
  top: 10px;
  margin-left: 5px;
`;
//티켓 아이콘 추가 필요

export const Product: React.FC<ProductProps> = ({
  category,
  company,
  quantity,
  name,
}) => {
  return (
    <ProductContainer>
      <ProductCategory>{category}</ProductCategory>
      <ProductName>{name}</ProductName>
      <ProductCompany>{company}</ProductCompany>
      <ProductTicket>
        필요한 티켓 <TicketIcon src={ticket} alt="Bookmark Icon" />x {quantity}
        개
      </ProductTicket>
    </ProductContainer>
  );
};
