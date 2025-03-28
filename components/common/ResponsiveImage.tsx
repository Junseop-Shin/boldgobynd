import { useState, useEffect } from "react";
import FullWidthImage, { FullscreenImageProps } from "./FullWidthImage";

interface ResponsiveImageProps extends FullscreenImageProps {
  mobileSrc: string;
  breakpoint?: number;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  mobileSrc,
  breakpoint = 990,
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
