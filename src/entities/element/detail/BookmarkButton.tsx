// BookmarkButton.tsx
import { useState } from "react";
import styled from "@emotion/styled";

import bookmarkIcon from "/image/product/bookmark.svg";
import checkBookmarkIcon from "/image/product/checkBookmark.svg";

import { ProductService } from "@/shared";

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const Icon = styled.img`
  position: fixed;
  bottom: 11px;
  left: 5%;
  width: 7%;
  height: 7%;
`;

const BookmarkButton = ({
  isBookmarked,
  id,
}: {
  isBookmarked: boolean;
  id: string;
}) => {
  const [state, setState] = useState(isBookmarked);

  const { onBookmark, offBookmark } = ProductService();

  const handleBookmarkClick = () => {
    if (state) offBookmark(id);
    else onBookmark(id);

    setState((prevState) => !prevState);
  };

  return (
    <Button onClick={handleBookmarkClick}>
      <Icon
        src={state ? checkBookmarkIcon : bookmarkIcon}
        alt="Bookmark Icon"
      />
    </Button>
  );
};

//checkBookmarkIcon, bookmarkIcon의 별 위치 상이 -> 수정 요망

export default BookmarkButton;
