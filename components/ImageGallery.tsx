import Link from "next/link";
import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { DropdownMenuOptionProps } from "./DropdownMenu";
import FullWidthImage from "./common/FullWidthImage";

export interface GalleryImage {
  title: string;
  titleDesc: string;
  categories: string[];
  categoryDesc: string;
  thumbnailImage: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  categories: DropdownMenuOptionProps[];
}

const GalleryContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const GalleryTagTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 3rem 0;
`;

const GalleryTag = styled.button<{ active: boolean }>`
  min-width: 120px;
  width: auto;
  border: ${({ active }) => (active ? "1px solid black" : "none")};
  padding: 8px 16px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 15px;
  transition: all 0.3s ease;
  font-size: 1rem;
  letter-spacing: 1px;
`;

const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

const ThumbnailImageContainer = styled(Link)`
  position: relative;
  transition: transform 0.3s ease;
  width: 100%;
  padding-top: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ThumbnailOverlay = styled.div<{ isHovered: boolean }>`
  display: ${(props) => (props.isHovered ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  transition: transform 0.3s ease;
  justify-content: flex-end;
  gap: 10px;
`;

const ThumbnailTitle = styled.p`
  font-size: 16px;
  color: white;
  margin: 0 20px;
  word-break: break-word;
  line-height: 1.8;
`;

const ThumbnailDescription = styled.p`
  font-size: 14px;
  color: white;
  margin: 0 20px 20px 20px;
  word-break: break-word;
  line-height: 1.8;
`;

const ImageGallery = ({ images, categories }: ImageGalleryProps) => {
  const [activeTag, setActiveTag] = useState<DropdownMenuOptionProps>(
    categories[0]
  );
  const [hoveredTag, setHoveredTag] = useState<DropdownMenuOptionProps | null>(
    null
  );
  const [hoveredImage, setHoveredImage] = useState<GalleryImage | null>(null);

  const filteredImages = useMemo(
    () =>
      images.filter(
        (image) =>
          image.categories.includes(activeTag.title) ||
          activeTag.title === "ALL"
      ),
    [images, activeTag]
  );

  const onTagClick = useCallback((category: DropdownMenuOptionProps) => {
    setActiveTag(category);
  }, []);

  return (
    <GalleryContainer>
      <GalleryTagTabs>
        {categories.map((category) => (
          <GalleryTag
            active={category === activeTag}
            onClick={() => onTagClick(category)}
            onMouseEnter={() => setHoveredTag(category)}
            onMouseLeave={() => setHoveredTag(null)}
            key={category.title}
          >
            {hoveredTag === category && activeTag !== category
              ? category.subtitle
              : category.title}
          </GalleryTag>
        ))}
      </GalleryTagTabs>
      <ThumbnailGrid>
        {filteredImages.map((image) => (
          <ThumbnailImageContainer
            href={`/works/${image.title}`}
            key={image.titleDesc}
            passHref
          >
            <FullWidthImage
              src={image.thumbnailImage}
              alt={image.titleDesc}
              responsive={false}
              cover
              onMouseEnter={() => setHoveredImage(image)}
            />
            <ThumbnailOverlay
              isHovered={hoveredImage === image}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <ThumbnailTitle>{image.titleDesc}</ThumbnailTitle>
              <ThumbnailDescription>{image.categoryDesc}</ThumbnailDescription>
            </ThumbnailOverlay>
          </ThumbnailImageContainer>
        ))}
      </ThumbnailGrid>
    </GalleryContainer>
  );
};

export default ImageGallery;
