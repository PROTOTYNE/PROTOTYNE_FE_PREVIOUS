// src/widgets/ProductInfo.tsx
import React from "react";
import "./ProductInfo.css";

interface ProductInfoProps {
  state: "신청" | "당첨" | "작성 완료" | "종료";
  productName: string;
  applicationDate: string;
  reviewPeriod?: string;
  resultDate?: string;
  statusDate?: string;
  status?: string;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  state,
  productName,
  applicationDate,
  reviewPeriod,
  resultDate,
  statusDate,
  status,
}) => {
  return (
    <div className="product-info-container">
      <div className="product-info-header">
        <div className="status-labels">
          <div className={`status-number ${state === "신청" ? "active" : ""}`}>
            10
          </div>
          <div className={`status-number ${state === "당첨" ? "active" : ""}`}>
            10
          </div>
          <div
            className={`status-number ${state === "작성 완료" ? "active" : ""}`}
          >
            10
          </div>
          <div className={`status-number ${state === "종료" ? "active" : ""}`}>
            10
          </div>
        </div>
        <div className="status-indicator">
          <div className={`status-label ${state === "신청" ? "active" : ""}`}>
            신청
          </div>
          <div className={`status-label ${state === "당첨" ? "active" : ""}`}>
            당첨
          </div>
          <div
            className={`status-label ${state === "작성 완료" ? "active" : ""}`}
          >
            작성 완료
          </div>
          <div className={`status-label ${state === "종료" ? "active" : ""}`}>
            종료
          </div>
        </div>
      </div>

      {state === "신청" && (
        <div className="application-info">
          <div className="application-info-header">
            <span>신청중인 체험 | 전체 보기</span>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <div className="product-details">
              <div className="product-title">{productName}</div>
              <div className="product-date">
                체험 신청일 : {applicationDate}
              </div>
            </div>
            <div className="product-status">발표일 D-n</div>
          </div>
        </div>
      )}

      {state === "당첨" && (
        <div className="application-info">
          <div className="product-card">
            <div className="product-image"></div>
            <div className="product-details">
              <div className="product-title">{productName}</div>
              <div className="product-date">
                후기 작성 기간 : {reviewPeriod}
              </div>
            </div>
            <div className="product-status">
              <div className="delivery-progress">
                <div className="progress-item">배송 준비중</div>
                <div className="progress-item">배송중</div>
                <div className="progress-item">배송 완료</div>
                <div className="progress-item review">후기 작성</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {state === "작성 완료" && (
        <div className="application-info">
          <div className="product-card">
            <div className="product-image"></div>
            <div className="product-details">
              <div className="product-title">{productName}</div>
              <div className="product-date">결과 발표일 : {resultDate}</div>
            </div>
            <div className="product-status">발표일 D-{statusDate}</div>
          </div>
        </div>
      )}

      {state === "종료" && (
        <div className="application-info">
          <div className="product-card">
            <div className="product-image"></div>
            <div className="product-details">
              <div className="product-title">{productName}</div>
              <div className="product-date">체험 신청일: {applicationDate}</div>
            </div>
            <div
              className={`product-status ${
                status === "패널티" ? "penalty" : "completed"
              }`}
            >
              {status === "패널티" ? "패널티" : "완료"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
