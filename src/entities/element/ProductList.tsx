import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { StatusType } from "@/service/my/product";
import { MyPageService } from "@/shared";

// import ProductItem from "./ProductItem";

const myPageService = MyPageService();

interface Ongoing {
  commonInfo: {
    investmentId: number;
    eventId: number;
    productId: number;
    name: string;
    thumbnailUrl: string;
    calculatedStatus: string;
    createdAt: string;
  };
  shipping: string;
  transportNum: string;
  feedbackStart: string;
  feedbackEnd: string;
}

interface Selected {
  commonInfo: {
    investmentId: number;
    eventId: number;
    productId: number;
    name: string;
    thumbnailUrl: string;
    calculatedStatus: string;
    createdAt: string;
  };
  judgeEnd: string;
  ddayToComplete: number;
}
interface Completed {
  commonInfo: {
    investmentId: number;
    eventId: number;
    productId: number;
    name: string;
    thumbnailUrl: string;
    calculatedStatus: string;
    createdAt: string;
  };
  penalty: true;
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
  ddayToSelected: number;
}
[];

/* interface AllRequested {
  investmentId: number;
  eventId: number;
  productId: number;
  name: string;
  thumbnailUrl: string;
  calculatedStatus: string;
  createdAt: string;
} */

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  margin-top: 0;
`;
const ProductName = styled.div`
  font-weight: bold;
  margin-bottom: 1px;
`;
const ProductDate = styled.div`
  font-size: 12px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  margin: 10px 10px 10px 0px;

  border-radius: 8px;
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
  flex-direction: column;
  margin-left: auto;
  font-weight: 500;

  > span {
    font-size: 10px;
  }

  > div {
    color: red;
  }
`;

const ColorProductStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;

  font-weight: bold;
  font-size: 15px;

  width: 70px;

  color: #002c7e;

  > span {
    font-size: 12px;
  }
`;

const DeliveryState = styled.div`
  margin-top: 1px;

  font-weight: bold;

  color: #686868;
  font-size: 15px;
`;

export const ProductList: React.FC<ProductListProps> = ({ status }) => {
  const [ongoingProduct, setOngoingProduct] = useState<Ongoing[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Selected[]>([]);
  const [completedProduct, setCompletedProduct] = useState<Completed[]>([]);
  const [appliedProduct, setAppliedProduct] = useState<appliedProduct[]>([]);

  const fetchApplied = async () => {
    const result = await myPageService.getMyProductsApplied();
    return result;
  };

  useEffect(() => {
    fetchApplied().then((result) => setAppliedProduct(result));
  }, []);

  const fetchOngoing = async () => {
    const result = await myPageService.getOngoing();
    return result;
  };

  useEffect(() => {
    fetchOngoing().then((result) => setOngoingProduct(result));
  }, []);

  const fetchSelected = async () => {
    const result = await myPageService.getSelectedProduct();
    return result;
  };

  useEffect(() => {
    fetchSelected().then((result) => setSelectedProduct(result));
  }, []);

  const fetchCompleted = async () => {
    const result = await myPageService.getCompleted();
    return result;
  };

  useEffect(() => {
    fetchCompleted().then((result) => setCompletedProduct(result));
  }, []);

  /* const allRequested = async () => {
    const result = await myPageService.getAllRequested();
    return result;
  };
  useEffect(() => {
    allRequested().then((result) => setAll(result));
  }, []); */

  return (
    <div>
      <h4 style={{ marginBottom: "3px" }}>
        {status === StatusType.applied
          ? "신청중인 체험"
          : status === StatusType.ongoing
          ? "진행중인 체험"
          : status === StatusType.winning
          ? "당첨된 체험"
          : "종료된 체험"}
      </h4>
      <div>
        {status === StatusType.applied ? (
          <ApplyProductList status={status} product={appliedProduct} />
        ) : status === StatusType.ongoing ? (
          <SelectedProductList status={status} product={selectedProduct} />
        ) : status === StatusType.winning ? (
          <WinningProductList status={status} product={ongoingProduct} />
        ) : (
          <CompletedProductList status={status} product={completedProduct} />
        )}
      </div>
    </div>
  );
};

const ApplyProductList = ({
  product,
}: {
  status: StatusType;
  product: appliedProduct[];
}) => {
  const navigate = useNavigate();

  return product.map((product) => (
    <ProductContainer
      onClick={() => {
        navigate("/product/" + product.commonInfo.eventId);
      }}
    >
      <Image
        src={product.commonInfo.thumbnailUrl}
        alt={product.commonInfo.name}
      />
      <Info>
        <ProductName>{product.commonInfo.name}</ProductName>
        <ProductDate>
          체험 신청일 : {getFormattedDate(product.commonInfo.createdAt)}
        </ProductDate>
      </Info>
      <ProductStatus>
        <span>발표일</span>
        D-{product.ddayToSelected}
      </ProductStatus>
    </ProductContainer>
  ));
};

const getFormattedDate = (date: string) => {
  const date1 = date.split("T")[0];
  const date2 = date1.split("-");
  const date3 = date2[0] + "." + date2[1] + "." + date2[2];
  return date3;
};

const SelectedProductList = ({
  product,
}: {
  status: StatusType;
  product: Selected[];
}) => {
  const navigate = useNavigate();

  return product.map((product) => (
    <ProductContainer
      onClick={() => {
        navigate("/product/" + product.commonInfo.eventId);
      }}
    >
      <Image
        src={product.commonInfo.thumbnailUrl}
        alt={product.commonInfo.name}
      />
      <Info>
        <ProductName>{product.commonInfo.name}</ProductName>
        <ProductDate>
          결과 발표일 : {getFormattedDate(product.judgeEnd)}
        </ProductDate>
      </Info>
      <ProductStatus>
        <span>발표일</span>
        {product.ddayToComplete ? `D-${product.ddayToComplete}` : "D-Day"}
      </ProductStatus>
    </ProductContainer>
  ));
};

const WinningProductList = ({
  product,
}: {
  status: StatusType;
  product: Ongoing[];
}) => {
  const navigate = useNavigate();

  return product.map((product) => (
    <ProductContainer>
      <Image
        src={product.commonInfo.thumbnailUrl}
        alt={product.commonInfo.name}
      />
      <Info>
        <ProductName>{product.commonInfo.name}</ProductName>
        <ProductDate>
          후기 작성 기간 : {getFormattedDate(product.feedbackStart)} ~{" "}
          {getFormattedDate(product.feedbackEnd)}
        </ProductDate>
        <DeliveryState>{product.shipping}</DeliveryState>
      </Info>
      <ColorProductStatus
        onClick={() => {
          navigate("/review/" + product.commonInfo.eventId);
        }}
      >
        후기 작성
        <br />
        <span>페이지 이동</span>
      </ColorProductStatus>
    </ProductContainer>
  ));
};

const CompletedProductList = ({
  product,
}: {
  status: StatusType;
  product: Completed[];
}) => {
  return product.map((product) => (
    <ProductContainer>
      <Image
        src={product.commonInfo.thumbnailUrl}
        alt={product.commonInfo.name}
      />
      <Info>
        <ProductName>{product.commonInfo.name}</ProductName>
        <ProductDate>
          체험 신청일 : {getFormattedDate(product.commonInfo.createdAt)}
        </ProductDate>
      </Info>
      <ProductStatus>
        {!product.penalty ? "완료" : <div>패널티</div>}
      </ProductStatus>
    </ProductContainer>
  ));
};
