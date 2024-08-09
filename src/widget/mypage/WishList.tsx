import React, { useState } from "react";
import "./WishList.css";

interface WishListItemProps {
  productName: string;
  ticketsAvailable: number;
  imageUrl?: string;
}

const WishListItem: React.FC<WishListItemProps> = ({
  productName,
  ticketsAvailable,
  imageUrl,
}) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="wishlist-item">
      <div className="wishlist-item-image">
        {imageUrl && <img src={imageUrl} alt={productName} />}
        <div
          className={`wishlist-item-bookmark ${
            isBookmarked ? "bookmarked" : ""
          }`}
          onClick={toggleBookmark}
        ></div>
      </div>
      <div className="wishlist-item-details">
        <div className="wishlist-item-name">{productName}</div>
        <div className="wishlist-item-tickets">티켓 X {ticketsAvailable}개</div>
      </div>
    </div>
  );
};

export const WishList: React.FC = () => {
  return (
    <div className="wishlist-container">
      <div className="wishlist-items">
        <WishListItem
          productName="마라탕후루 만두 마라맛"
          ticketsAvailable={2}
          imageUrl="path/to/image.jpg" // 나중에 실제 이미지 경로로 변경
        />
        {/* 추가적인 WishListItem 컴포넌트를 여기에 추가 */}
      </div>
    </div>
  );
};
