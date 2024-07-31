import React, { useState } from 'react';
import styled from '@emotion/styled';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const BookmarkButton = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  background-color: white;
  border-radius: 50%;
  padding: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyComponent: React.FC = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div style={{ height: '200vh', position: 'relative' }}>
      <p>Scroll down to see the fixed Bookmark icon.</p>
      <BookmarkButton onClick={handleBookmarkClick}>
        {isBookmarked ? (
          <BookmarkIcon style={{ color: 'black', fontSize: 24 }} />
        ) : (
          <BookmarkBorderIcon style={{ color: 'black', fontSize: 24 }} />
        )}
      </BookmarkButton>
    </div>
  );
};

export default MyComponent;
