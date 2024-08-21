import { StatusType } from "@/service/my/product";
import { MyPageService } from "@/shared";
import React from "react";
import { useEffect, useState } from "react";
// import ProductItem from "./ProductItem";
import styled from "@emotion/styled";

const myPageService = MyPageService();
interface AnnouncementDate {
  daysLeft: number;
  status: "당첨" | "미당첨" | null; // 특정 문자열로 제한
}

interface Product {
  name: string;
  applicationDate: string;
  announcementDate?: AnnouncementDate | null; // announcementDate는 선택적
  shippingStatus?: "배송 준비중" | "배송중" | "배송 완료" | undefined; // 특정 문자열로 제한
}

interface Ongoing {
  commonInfo: {
    investmentId: 0,
    eventId: 0,
    productId: 0,
    name: string,
    thumbnailUrl: string,
    calculatedStatus: string,
    createdAt: string,
  },
  shipping: string,
  transportNum: string,
  feedbackStart: string,
  feedbackEnd: string
}
interface Selected {
  commonInfo: {
    investmentId: 0,
    eventId: 0,
    productId: 0,
    name: string,
    thumbnailUrl: string,
    calculatedStatus: string,
    createdAt: string,
  },
  judgeEnd: string,
  ddayToComplete: 0,
}
interface Completed {
  commonInfo: {
    investmentId: 0,
    eventId: 0,
    productId: 0,
    name: string,
    thumbnailUrl: string,
    calculatedStatus: string,
    createdAt: string,
  },
  penalty: true,
}

interface ProductListProps {
  status: StatusType;
}

interface appliedProduct {
  commonInfo: {
    investmentId: number;
    eventId: number;
    productId: number;
    name: string;
    thumbnailUrl: string;
    calculatedStatus: string;
    createdAt: string;
  };
  ddayToSelected: 0;
}[];

interface AllRequested {
  investmentId: number;
  eventId: number;
  productId: number;
  name: string;
  thumbnailUrl: string;
  calculatedStatus: string;
  createdAt: string;
}

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0;
`;
const ProductName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;
const ProductDate = styled.div`
  font-size: 12px;
`;

const Image = styled.img`
width: 60px;
height: 60px;
margin: 0px 10px 10px 0px;
`;
const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const ProductStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  font-weight: 500;
`;

export const ProductList: React.FC<ProductListProps> = ({ status }) => {
  const [ongoingProduct, setOngoingProduct] = useState<Ongoing[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Selected[]>([]);
  const [completedProduct, setCompletedProduct] = useState<Completed[]>([]);
  const [appliedProduct, setAppliedProduct] = useState<appliedProduct[]>([]);
  const [all, setAll] = useState<AllRequested[]>([]);

  const fetchApplied = async () => {
    const result = await myPageService.getMyProductsApplied();
    return result;
  }
  useEffect(() => {
    fetchApplied()
    .then((result) => setAppliedProduct(result));
  }, []);
  
  const fetchOngoing = async () => {
    const result = await myPageService.getOngoing();
    return result;
  }
  useEffect(() => {
    fetchOngoing()
    .then((result) => setOngoingProduct(result));
  }, []);

  const fetchSelected = async () => {
    const result = await myPageService.getSelectedProduct();
    return result;
  }

  useEffect(() => {
    fetchSelected()
    .then((result) => setSelectedProduct(result));
  }, []);
  
  const fetchCompleted = async () => {
    const result = await myPageService.getCompleted();
    return result;
  }

  useEffect(() => {
    fetchCompleted()
    .then((result) => setCompletedProduct(result));
  }, []);

  const allRequested = async () => {
    const result = await myPageService.getAllRequested();
    return result;
  }
  useEffect(() => {
    allRequested()
    .then((result) => setAll(result));
  },[]);

  const getFormattedDate = (date: any) => {
    date = date.split("T")[0];
    date = date.split("-");
    date = date[0] + "." + date[1] + "." + date[2];
    return date
  };
  
  const ApplyProductList = ({ status, product }: { status: StatusType, product: appliedProduct[] }) => {
    return (
      product.map((product) => (
        <ProductContainer>
          <Image src={product.commonInfo.thumbnailUrl} alt={product.commonInfo.name} />
          <Info>
            <ProductName>{product.commonInfo.name}</ProductName>
            {status === StatusType.applied && <ProductDate>체험 신청일 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
            {status === StatusType.ongoing && <ProductDate>결과 발표일 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
            {status === StatusType.winning && <ProductDate>후기 작성 기간 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
            {status === StatusType.completed && <ProductDate>체험 신청일 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
          </Info>
          <ProductStatus>{"당첨 >"}</ProductStatus>
        </ProductContainer>
      )));
  }

  const SelectedProductList = ({ status, product }: { status: StatusType, product: Selected[] }) => {
    return (
      product.map((product) => (
        <ProductContainer>
          <Image src={product.commonInfo.thumbnailUrl} alt={product.commonInfo.name} />
          <Info>
            <ProductName>{product.commonInfo.name}</ProductName>
            {status === StatusType.applied && <ProductDate>체험 신청일 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
            {status === StatusType.ongoing && <ProductDate>결과 발표일 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
            {status === StatusType.winning && <ProductDate>후기 작성 기간 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
            {status === StatusType.completed && <ProductDate>체험 신청일 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
          </Info>
          <ProductStatus>{"당첨 >"}</ProductStatus>
        </ProductContainer>
      )));
  }

  const WinningProductList = ({ status, product }: { status: StatusType, product: Ongoing[] }) => {
    return (
      product.map((product) => (
        <ProductContainer>
          <Image src={product.commonInfo.thumbnailUrl} alt={product.commonInfo.name} />
          <Info>
            <ProductName>{product.commonInfo.name}</ProductName>
            {status === StatusType.applied && <ProductDate>체험 신청일 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
            {status === StatusType.ongoing && <ProductDate>결과 발표일 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
            {status === StatusType.winning && <ProductDate>후기 작성 기간 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
            {status === StatusType.completed && <ProductDate>체험 신청일 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
          </Info>
          <ProductStatus>{"당첨 >"}</ProductStatus>
        </ProductContainer>
      )));
  }
  const CompletedProductList = ({ status, product }: { status: StatusType, product: Completed[] }) => {
    return (
      product.map((product) => (
        <ProductContainer>
          <Image src={product.commonInfo.thumbnailUrl} alt={product.commonInfo.name} />
          <Info>
            <ProductName>{product.commonInfo.name}</ProductName>
            {status === StatusType.applied && <ProductDate>체험 신청일 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
            {status === StatusType.ongoing && <ProductDate>결과 발표일 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
            {status === StatusType.winning && <ProductDate>후기 작성 기간 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
            {status === StatusType.completed && <ProductDate>체험 신청일 : {getFormattedDate(product.commonInfo.createdAt)}</ProductDate>}
          </Info>
          <ProductStatus>{"당첨 >"}</ProductStatus>
        </ProductContainer>
      )));
  }

  return (
    <div>
      <h4>
        {status === StatusType.applied
          ? "신청중인 체험"
          : status === StatusType.ongoing
          ? "진행중인 체험"
          : status === StatusType.winning
          ? "당첨된 체험"
          : "종료된 체험"}
      </h4>
      <div>
        {status === StatusType.applied ?
          <ApplyProductList status={status} product={appliedProduct} />
          : status === StatusType.ongoing ?
          <SelectedProductList status={status} product={selectedProduct} />
          : status === StatusType.winning ?
          <WinningProductList status={status} product={ongoingProduct} />
          : <CompletedProductList status={status} product={completedProduct} />
        }
      </div>
    </div>
  );
};
