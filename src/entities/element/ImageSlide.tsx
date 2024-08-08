/** @jsxImportSource @emotion/react */
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styled from '@emotion/styled';

interface Image {
  original: string;
  thumbnail: string;
}

const images: Image[] = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
];

const GalleryWrapper = styled.div`
  .image-gallery-slide {
    img {
      border-radius: 10px; 
      width: 90%;
    }
  }
  .image-gallery-bullets {
    bottom: 10px;
    right: 10px;
    left: auto;
  }

  .image-gallery-bullets .image-gallery-bullet {
    margin: 2px;
  }

  .image-gallery-left-nav {
    left: 20px;
  }

  .image-gallery-right-nav {
    right: 20px;
  }
`;

const ImageSlide: React.FC = () => {
  return (
    <GalleryWrapper>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        showBullets={true}
      />
    </GalleryWrapper>
  );
};

export default ImageSlide;
