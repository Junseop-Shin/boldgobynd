import styled from "styled-components";
import { FaSearchMinus, FaSearchPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { CarouselImage } from "./ImageCarousel";
import { TransformState } from "../../utils/useFullScreenImage";
import { MOBILE_BREAKPOINT } from "../../assets/common";

interface FullscreenImageProps {
  image: CarouselImage;
  length: number;
  closeFullscreen: () => void;
  setFullscreenImageIndex: Dispatch<SetStateAction<number>>;
  transform: TransformState;
  setTransform: Dispatch<SetStateAction<TransformState>>;
}

const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const FullscreenImageContainer = styled.div<{ isDragging: boolean }>`
  position: relative;
  width: min(80vh, 80vw);
  height: min(80vh, 80vw);
  overflow: hidden;
  cursor: ${(props) => (props.isDragging ? "grabbing" : "grab")};
`;

const FullImage = styled.img<{ transform: TransformState }>`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(${(props) => props.transform.scale})
    translate(
      ${(props) => props.transform.translateX}px,
      ${(props) => props.transform.translateY}px
    );
  transition: transform 0.3s ease;
`;

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  background: transparent;
  top: 20px;
  right: 20px;
  gap: 20px;
`;

const PlusButton = styled(FaSearchPlus)`
  background: transparent;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: 400;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const MinusButton = styled(FaSearchMinus)`
  background: transparent;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: 400;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const CloseButton = styled(IoClose)`
  background: transparent;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  font-weight: 700;

  &:hover {
    opacity: 1;
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

const FullscreenImage = ({
  image,
  length,
  closeFullscreen,
  setFullscreenImageIndex,
  transform,
  setTransform,
}: FullscreenImageProps) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragStartTranslate, setDragStartTranslate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const nextFullscreenImage = () => {
    setFullscreenImageIndex((prevIndex) => (prevIndex + 1) % length);
    setTransform({
      scale: 1,
      translateX: 0,
      translateY: 0,
    });
  };

  const prevFullscreenImage = () => {
    setFullscreenImageIndex((prevIndex) => (prevIndex - 1 + length) % length);
    setTransform({
      scale: 1,
      translateX: 0,
      translateY: 0,
    });
  };

  const handleZoom = (factor: number) => {
    setTransform((prev) => {
      const newScale = Math.max(1, Math.min(5, prev.scale * factor));

      // 확대/축소 시 위치 제한 재계산
      const containerWidth = containerRef.current?.clientWidth || 0;
      const containerHeight = containerRef.current?.clientHeight || 0;

      const scaledWidth = containerWidth * newScale;
      const scaledHeight = containerHeight * newScale;

      const maxTranslateX = Math.max(
        0,
        (scaledWidth - containerWidth) / (2 * newScale)
      );
      const maxTranslateY = Math.max(
        0,
        (scaledHeight - containerHeight) / (2 * newScale)
      );

      return {
        scale: newScale,
        translateX: Math.max(
          -maxTranslateX,
          Math.min(maxTranslateX, prev.translateX)
        ),
        translateY: Math.max(
          -maxTranslateY,
          Math.min(maxTranslateY, prev.translateY)
        ),
      };
    });
  };

  // 드래그 시작 핸들러
  const handleMouseDown = (e: React.MouseEvent) => {
    if (transform.scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
      setDragStartTranslate({
        x: transform.translateX,
        y: transform.translateY,
      });
    }
  };

  // 전역 마우스 이벤트 처리
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        if (transform.scale > 1) {
          const deltaX = e.clientX - dragStart.x;
          const deltaY = e.clientY - dragStart.y;

          // 새로운 위치 계산
          const newTranslateX = dragStartTranslate.x + deltaX / transform.scale;
          const newTranslateY = dragStartTranslate.y + deltaY / transform.scale;

          // 이미지 크기와 컨테이너 크기 기반으로 제한 계산
          const containerWidth = containerRef.current?.clientWidth || 0;
          const containerHeight = containerRef.current?.clientHeight || 0;

          // 이미지의 확대된 크기 계산
          const scaledWidth = containerWidth * transform.scale;
          const scaledHeight = containerHeight * transform.scale;

          // 최대 이동 가능 거리 계산
          const maxTranslateX = Math.max(
            0,
            (scaledWidth - containerWidth) / (2 * transform.scale)
          );
          const maxTranslateY = Math.max(
            0,
            (scaledHeight - containerHeight) / (2 * transform.scale)
          );

          // 제한된 값 적용
          const limitedTranslateX = Math.max(
            -maxTranslateX,
            Math.min(maxTranslateX, newTranslateX)
          );
          const limitedTranslateY = Math.max(
            -maxTranslateY,
            Math.min(maxTranslateY, newTranslateY)
          );

          setTransform((prev) => ({
            ...prev,
            translateX: limitedTranslateX,
            translateY: limitedTranslateY,
          }));
        }
      };

      const handleGlobalMouseUp = () => {
        setIsDragging(false);
      };

      // 전역 이벤트 리스너 등록
      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleGlobalMouseMove);
        window.removeEventListener("mouseup", handleGlobalMouseUp);
      };
    }
  }, [
    isDragging,
    dragStart,
    dragStartTranslate,
    transform.scale,
    setTransform,
  ]);

  return (
    <FullscreenOverlay ref={containerRef}>
      <FullscreenImageContainer
        isDragging={isDragging}
        onMouseDown={handleMouseDown}
      >
        <FullImage
          src={image.thumbnailImage}
          alt={image.titleDesc}
          transform={transform}
        />
      </FullscreenImageContainer>
      <ButtonContainer>
        <MinusButton onClick={() => handleZoom(0.8)} />
        <PlusButton onClick={() => handleZoom(1.2)} />
        <CloseButton onClick={closeFullscreen} />
      </ButtonContainer>
      <PrevButton
        onClick={prevFullscreenImage}
        style={{ left: "30px" }}
        isfullscreen
      >
        &#10094;
      </PrevButton>
      <NextButton
        onClick={nextFullscreenImage}
        style={{ right: "30px" }}
        isfullscreen
      >
        &#10095;
      </NextButton>
    </FullscreenOverlay>
  );
};

export default FullscreenImage;
