import { StatusType } from "@/service/my/product";
import { MyPageService } from "@/shared";
import React from "react";
import { useEffect, useState } from "react";
// import ProductItem from "./ProductItem";


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

  return (
    <div>
      <h2>
        {status === StatusType.applied
          ? "신청중인 체험"
          : status === StatusType.ongoing
          ? "진행중인 체험"
          : status === StatusType.winning
          ? "당첨된 체험"
          : "종료된 체험"}
      </h2>
      <div>
        {status === StatusType.applied
          ? all.map((product) => (
              <div key={product.eventId}>
                <h3>{product.name}</h3>
                <p>{product.calculatedStatus}</p>
              </div>
            ))
          : status === StatusType.ongoing
          ? all.map((product) => (
            <div key={product.eventId}>
              <h3>{product.name}</h3>
              <p>{product.calculatedStatus}</p>
            </div>
          ))
          : all.map((product) => (
            <div key={product.eventId}>
              <h3>{product.name}</h3>
              <p>{product.calculatedStatus}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
