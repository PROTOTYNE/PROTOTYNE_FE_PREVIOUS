// BookmarkButton.tsx
import React, { useState } from 'react';
import styled from '@emotion/styled';
import bookmarkIcon from './assets/bookmark.svg';
import checkBookmarkIcon from './assets/checkBookmark.svg';

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
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

export default BookmarkButton;
