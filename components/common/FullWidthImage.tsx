import Image, { ImageProps } from "next/image";
import styled from "styled-components";

export interface FullscreenImageProps extends ImageProps {
  hoverScale?: boolean;
  cover?: boolean;
  responsive?: boolean;
}

const SquareImage = styled(Image)<{
  hoverScale?: boolean;
  cover?: boolean;
  responsive?: boolean;
}>`
    position: ${(props) => !props.responsive && "absolute"}
  transition: transform 0.3s ease;
  object-fit: ${(props) => (props.cover ? "cover" : "contain")};

  &:hover {
    transform: ${(props) => props.hoverScale && "scale(1.05)"};
  }
`;

const FullWidthImage: React.FC<FullscreenImageProps> = ({
  hoverScale,
  cover,
  responsive = true,
  ...props
}: FullscreenImageProps) => {
  return (
    <SquareImage
      hoverScale={hoverScale}
      cover={cover}
      layout={responsive ? "responsive" : undefined}
      fill={!responsive}
      sizes={responsive ? undefined : "100vw"}
      responsive={responsive}
      {...props}
    />
  );
};

export default FullWidthImage;
