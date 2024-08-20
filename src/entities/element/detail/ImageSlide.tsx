/** @jsxImportSource @emotion/react */
import { ProductService } from "@/shared";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

interface Image {
  eventId: string;
}

const GalleryWrapper = styled.div`
  margin-top: 60px;
  z-index: 1;
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

export const ImageSlide: React.FC = ({eventId}) => {
  const { getResult } = ProductService();
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await getResult(eventId);

        // Assuming the API returns an array of image URLs
        const fetchedImages = result.imageUrls.map((url: string) => ({
          original: url,
          thumbnail: url, // You can modify this to use a different thumbnail URL if available
        }));

        setImages(fetchedImages);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, [eventId]);

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
