import { useState, useEffect } from "react";
import FullWidthImage, { FullscreenImageProps } from "./FullWidthImage";
import { MOBILE_BREAKPOINT } from "../../assets/common";

interface ResponsiveImageProps extends FullscreenImageProps {
  mobileSrc: string;
  breakpoint?: number;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  mobileSrc,
  breakpoint = MOBILE_BREAKPOINT,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    const handleResize = () => {
      setCurrentSrc(window.innerWidth <= breakpoint ? mobileSrc : src);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [src, mobileSrc, breakpoint]);

  return <FullWidthImage src={currentSrc} {...props} />;
};

export default ResponsiveImage;
