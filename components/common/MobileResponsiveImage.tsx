import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import FullWidthImage from "./FullWidthImage";

interface ResponsiveImageProps extends ImageProps {
  breakpoint?: number;
}

/**
 * @param param0 모바일/웹 화면 기준
 * @returns 모바일 화면에는 Responsible, 웹 화면에는 일반 이미지
 */
const MobileResponsiveImage: React.FC<ResponsiveImageProps> = ({
  breakpoint = 990,
  ...props
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return <>{isMobile ? <FullWidthImage {...props} /> : <Image {...props} />}</>;
};

export default MobileResponsiveImage;
