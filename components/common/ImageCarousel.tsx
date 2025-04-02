import Link from "next/link";
import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import FullWidthImage from "./FullWidthImage";
import useFullScreenImage from "../../utils/useFullScreenImage";
import FullscreenImage from "./FullScreenImage";
import { MOBILE_BREAKPOINT } from "../../assets/common";

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
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 5rem 0;
`;

const CarouselTrack = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translateX}px);
`;

const ImageSlide = styled.div<{ width: number }>`
  flex: 0 0 ${(props) => props.width}px;
  width: ${(props) => props.width}px;
  padding-top: ${(props) => props.width}px; /* 정사각형 비율 유지 */
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  min-height: 300px;
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

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
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

const ControlsContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 10;
`;

const IndicatorDot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "#0070f3" : "rgba(0, 0, 0, 0.3)"};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.active ? "#0070f3" : "rgba(0, 0, 0, 0.5)"};
  }
`;

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlayInterval = 5000,
  isLinked = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [slidesToShow, setSlidesToShow] = useState<number>(4);
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const {
    fullscreenImageIndex,
    setFullscreenImageIndex,
    transform,
    setTransform,
  } = useFullScreenImage();

  // 반응형으로 보여줄 슬라이드 수 계산
  const calculateSlidesToShow = useCallback(() => {
    if (window.innerWidth < 576) {
      return 1;
    } else if (window.innerWidth < 768) {
      return 2;
    } else if (window.innerWidth < 992) {
      return 3;
    } else {
      return 4;
    }
  }, []);

  // 슬라이드 너비 계산 및 translateX 설정
  const calculateDimensions = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const slides = calculateSlidesToShow();
      const width = containerWidth / slides;

      setSlideWidth(width);
      setSlidesToShow(slides);
      setTranslateX(-currentIndex * width);
    }
  }, [calculateSlidesToShow, currentIndex]);

  // 윈도우 리사이즈 이벤트 처리
  useEffect(() => {
    const handleResize = () => {
      calculateDimensions();
    };

    // 초기 계산
    calculateDimensions();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [calculateDimensions]);

  // 인덱스 변경 시 translateX 업데이트
  useEffect(() => {
    setTranslateX(-currentIndex * slideWidth);
  }, [currentIndex, slideWidth]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      // 마지막 이미지에 도달했을 때 첫 번째 이미지로 돌아가기
      return prevIndex >= images.length - slidesToShow ? 0 : prevIndex + 1;
    });
  }, [images.length, slidesToShow]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      // 첫 번째 이미지에서 이전으로 가면 마지막 슬라이드로 이동
      return prevIndex <= 0 ? images.length - slidesToShow : prevIndex - 1;
    });
  }, [images.length, slidesToShow]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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

  // 페이지 인디케이터 계산
  const totalSlides = images.length - slidesToShow + 1;
  const pageIndicators = Array.from({ length: totalSlides }, (_, i) => i);

  return (
    <GalleryContainer ref={containerRef}>
      <CarouselWrapper>
        <CarouselTrack translateX={translateX}>
          {images.map((image, index) => (
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
                <SquareImageContainer onClick={() => openFullscreen(index)}>
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
        <ControlsContainer>
          {pageIndicators.map((pageIndex) => (
            <IndicatorDot
              key={pageIndex}
              active={currentIndex === pageIndex}
              onClick={() => goToSlide(pageIndex)}
            />
          ))}
        </ControlsContainer>
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
