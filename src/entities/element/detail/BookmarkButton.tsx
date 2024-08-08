// BookmarkButton.tsx
import React, { useState } from 'react';
import styled from '@emotion/styled';
import bookmarkIcon from '../../../../public/image/bookmark.svg';
import checkBookmarkIcon from '../../../../public/image/checkBookmark.svg';

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
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(prevState => !prevState);
  };

  return (
    <Button onClick={handleBookmarkClick}>
      <Icon src={isBookmarked ? checkBookmarkIcon : bookmarkIcon} alt="Bookmark Icon" />
    </Button>
  );
};

//checkBookmarkIcon, bookmarkIcon의 별 위치 상이 -> 수정 요망

export default BookmarkButton;
