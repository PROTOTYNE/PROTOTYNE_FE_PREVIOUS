// BookmarkButton.tsx
import React, { useState } from 'react';
import styled from '@emotion/styled';
import bookmarkIcon from '/image/product/bookmark.svg';
import checkBookmarkIcon from '/image/product/checkBookmark.svg';
import { ProductService } from '@/shared';

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

const BookmarkButton: React.FC = () => {
  const {getResult} = ProductService();

  const [isBookmarked, setIsBookmarked] = useState({
    "id": 0,
    "name": "string",
    "enterprise": "string",
    "category": "뷰티",
    "reqTickets": 0,
    "imageUrls": [
      "string"
    ],
    "notes": "string",
    "contents": "string",
    "isBookmarked": true,
  });

  const handleBookmarkClick = () => {
    setIsBookmarked(prevState => !prevState);
  };

  return (
    <Button onClick={handleBookmarkClick}>
      <Icon src={isBookmarked ? checkBookmarkIcon : bookmarkIcon} alt="Bookmark Icon" />
    </Button>
  );
};

export default BookmarkButton;
