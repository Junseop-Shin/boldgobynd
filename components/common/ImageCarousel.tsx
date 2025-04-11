import Link from "next/link";
import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import FullWidthImage from "./FullWidthImage";
import useFullScreenImage from "../../utils/useFullScreenImage";
import FullscreenImage from "./FullScreenImage";
import { MOBILE, MOBILE_BREAKPOINT } from "../../assets/common";

// 타입 정의
export interface CarouselImage {
  title?: string;
  titleDesc: string;
  thumbnailImage: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlayInterval?: number;
  isLinked?: boolean;
}

// 스타일드 컴포넌트
const GalleryContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 5rem 0;
`;

const CarouselTrack = styled.div<{
  translateX: number;
  transitionEnabled: boolean;
}>`
  display: flex;
  transform: translateX(${(props) => props.translateX}px);
  transition: ${(props) =>
    props.transitionEnabled ? "transform 0.5s ease-in-out" : "none"};
`;

const ImageSlide = styled.div<{ width: number }>`
  flex: 0 0 ${(props) => props.width}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  padding-top: ${(props) => props.width}px; /* 정사각형 비율 유지 */
  position: relative;
  box-sizing: border-box;
  padding: 5px;
`;

const SquareImageContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
`;

const SquareImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavigationButton = styled.button<{ isfullscreen?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  opacity: ${(props) => (props.isfullscreen ? 0.7 : 0.3)};
  transition: opacity 0.3s ease;

  &:hover {
    opacity: ${(props) => (props.isfullscreen ? 1 : 0.7)};
  }

  @media ${MOBILE} {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 16px;
`;

const NextButton = styled(NavigationButton)`
  right: 16px;
`;

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlayInterval = 5000,
  isLinked = false,
}) => {
  const [slidesToShow, setSlidesToShow] = useState<number>(4);
  const [currentIndex, setCurrentIndex] = useState<number>(slidesToShow * 2);
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const {
    fullscreenImageIndex,
    setFullscreenImageIndex,
    transform,
    setTransform,
  } = useFullScreenImage();

  const duplicateCount = slidesToShow * 2;
  const repeatedImages = [];
  const originalImages = images.map((img, i) => ({ ...img, originalIndex: i }));

  while (repeatedImages.length < duplicateCount) {
    repeatedImages.push(...originalImages);
  }

  const extendedSlides = [
    ...repeatedImages.slice(-duplicateCount),
    ...originalImages,
    ...repeatedImages.slice(0, duplicateCount),
  ];

  // 슬라이드 너비 계산 및 translateX 설정
  const calculateDimensions = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const slides = window.innerWidth < MOBILE_BREAKPOINT ? 2 : 4;
      const width = containerWidth / slides;
      // const newIndex = (currentIndex * slidesToShow) % slides;

      setSlideWidth(width);
      setSlidesToShow(slides);
      // setCurrentIndex(newIndex);
      // setTranslateX(-newIndex * width);
      setTranslateX(-currentIndex * width);
    }
  }, [currentIndex]);

  useEffect(() => {
    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, [calculateDimensions]);

  // 인덱스 변경 시 translateX 업데이트
  useEffect(() => {
    setTranslateX(-currentIndex * slideWidth);
  }, [currentIndex, slideWidth]);

  const slideTo = (index: number) => {
    setCurrentIndex(index);
    setTransitionEnabled(true);
  };

  const nextSlide = useCallback(() => {
    slideTo(currentIndex + slidesToShow);
  }, [currentIndex, slidesToShow]);

  const prevSlide = useCallback(() => {
    slideTo(currentIndex - slidesToShow);
  }, [currentIndex, slidesToShow]);

  const openFullscreen = (index: number) => {
    setFullscreenImageIndex(index);
    setIsFullscreen(true);
    setIsPlaying(false);
    setTransform({
      scale: 1,
      translateX: 0,
      translateY: 0,
    });
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setIsPlaying(true);
    setTransform({
      scale: 1,
      translateX: 0,
      translateY: 0,
    });
  };

  // 자동 재생
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, nextSlide, autoPlayInterval]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex >= images.length + duplicateCount) {
        const offset = (currentIndex - duplicateCount) % images.length;
        const correctedIndex = duplicateCount + offset;
        setTransitionEnabled(false);
        setCurrentIndex(correctedIndex);
      } else if (currentIndex < duplicateCount) {
        const offset =
          (currentIndex - duplicateCount + images.length) % images.length;
        const correctedIndex = duplicateCount + offset;
        setTransitionEnabled(false);
        setCurrentIndex(correctedIndex);
      }
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener("transitionend", handleTransitionEnd);
      return () =>
        track.removeEventListener("transitionend", handleTransitionEnd);
    }
  }, [currentIndex]);

  return (
    <GalleryContainer ref={containerRef}>
      <CarouselWrapper>
        <CarouselTrack
          translateX={translateX}
          transitionEnabled={transitionEnabled}
          ref={trackRef}
        >
          {extendedSlides.map((image, index) => (
            <ImageSlide key={index} width={slideWidth}>
              {isLinked ? (
                <Link
                  href={image.title ? `/works/${image.title}` : "/"}
                  passHref
                >
                  <SquareImageContainer>
                    <SquareImage
                      src={image.thumbnailImage}
                      alt={image.titleDesc}
                    />
                    <FullWidthImage
                      src={image.thumbnailImage}
                      alt={image.titleDesc}
                      responsive={false}
                      cover
                    />
                  </SquareImageContainer>
                </Link>
              ) : (
                <SquareImageContainer
                  onClick={() => openFullscreen(image.originalIndex)}
                >
                  <FullWidthImage
                    src={image.thumbnailImage}
                    alt={image.titleDesc}
                    responsive={false}
                    cover
                  />
                </SquareImageContainer>
              )}
            </ImageSlide>
          ))}
        </CarouselTrack>

        <PrevButton onClick={prevSlide}>&#10094;</PrevButton>
        <NextButton onClick={nextSlide}>&#10095;</NextButton>
      </CarouselWrapper>
      {isFullscreen && (
        <FullscreenImage
          image={images[fullscreenImageIndex]}
          length={images.length}
          closeFullscreen={closeFullscreen}
          setFullscreenImageIndex={setFullscreenImageIndex}
          transform={transform}
          setTransform={setTransform}
        />
      )}
    </GalleryContainer>
  );
};

export default ImageCarousel;
