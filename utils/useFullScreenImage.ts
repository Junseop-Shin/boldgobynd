import { useState } from "react";

export interface TransformState {
  scale: number;
  translateX: number;
  translateY: number;
}

const useFullScreenImage = () => {
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState<number>(0);
  const [transform, setTransform] = useState<TransformState>({
    scale: 1,
    translateX: 0,
    translateY: 0,
  });

  return {
    fullscreenImageIndex,
    setFullscreenImageIndex,
    transform,
    setTransform,
  };
};

export default useFullScreenImage;
