import React from 'react';
import ProductItem from './ProductItem'; 

interface AnnouncementDate {
  daysLeft: number;
  status: '당첨' | '미당첨' | null; // 특정 문자열로 제한
}

interface Product {
  name: string;
  applicationDate: string;
  announcementDate?: AnnouncementDate | null; // announcementDate는 선택적
  shippingStatus?: '배송 준비중' | '배송중' | '배송 완료' | undefined; // 특정 문자열로 제한
}

interface ProductListProps {
  status: '신청' | '진행중' | '당첨' | '종료';
}

const ProductList: React.FC<ProductListProps> = ({ status }) => {
  const products: Record<string, Product[]> = {
    신청: [
      {
        name: "마라탕후루 만두 마라맛 확인 시제품",
        applicationDate: "2024-08-01",
        announcementDate: { daysLeft: 30, status: null }
      },
      {
        name: "마라탕후루 만두 마라맛 확인 시제품",
        applicationDate: "2024-08-02",
        announcementDate: { daysLeft: 0, status: '미당첨' }
      }
    ],
    진행중: [
      {
        name: "마라탕후루 만두 마라맛 확인 시제품",
        applicationDate: "2024-08-01",
        announcementDate: { daysLeft: 10, status: '당첨' }
      },
      {
        name: "마라탕후루 만두 마라맛 확인 시제품",
        applicationDate: "2024-08-02",
        announcementDate: { daysLeft: 0, status: '미당첨' }
      }
    ],
    당첨: [
      {
        name: "마라탕후루 만두 마라맛 확인 시제품",
        applicationDate: "2024-07-01",
        announcementDate: null,
        shippingStatus: '배송 준비중'
      },
      {
        name: "마라탕후루 만두 마라맛 확인 시제품",
        applicationDate: "2024-07-02",
        announcementDate: null,
        shippingStatus: '배송중'
      },
      {
        name: "당첨된 체험3",
        applicationDate: "2024-07-03",
        announcementDate: null,
        shippingStatus: '배송 완료'
      }
    ],
    종료: [
      {
        name: "마라탕후루 만두 마라맛 확인 시제품",
        applicationDate: "2024-07-02",
        announcementDate: null,
        shippingStatus: undefined // 상태가 없을 경우 undefined로 설정
      },
      {
        name: "마라탕후루 만두 마라맛 확인 시제품",
        applicationDate: "2024-07-02",
        announcementDate: null,
        shippingStatus: undefined
      }
    ]
  };

  return (
    <div>
      <h2>
        {status === '신청' ? '신청중인 체험' : status === '진행중' ? '진행중인 체험' : status === '당첨' ? '당첨된 체험' : '종료된 체험'}
      </h2>
      {products[status].map((product, index) => (
        <ProductItem
          key={index}
          productName={product.name}
          applicationDate={product.applicationDate}
          announcementDate={product.announcementDate}
          shippingStatus={product.shippingStatus}
          status={status} // 상태를 추가
        />
      ))}
    </div>
  );
};

export default ProductList;
