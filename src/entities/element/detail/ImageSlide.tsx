import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "@emotion/styled";

const GalleryWrapper = styled.div`
  margin-top: 72px;
  z-index: 1;
  .image-gallery-slide {
    img {
      border-radius: 10px;
      width: 90%;
    }
  }
  .image-gallery-bullets {
    bottom: 10px;
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

export const ImageSlide = ({ imageUrls }: { imageUrls: string[] }) => {
  const items: ReactImageGalleryItem[] = [];

  imageUrls.forEach((imageUrl) => {
    items.push({ original: imageUrl });
  });

  return (
    <GalleryWrapper>
      <ImageGallery
        items={items}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        showBullets={true}
      />
    </GalleryWrapper>
  );
};
