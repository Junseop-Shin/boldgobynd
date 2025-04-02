import { ComponentProps, ReactNode } from "react";
import styled from "styled-components";

interface FullScreenOverlayProps extends ComponentProps<"div"> {
  opacity?: number;
  children?: ReactNode;
}

const Fullscreen = styled.div<{ opacity: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => props.opacity};
  z-index: 1000;
`;

const FullScreenOverlay = ({
  opacity = 0.9,
  children,
  ...props
}: FullScreenOverlayProps) => {
  return (
    <Fullscreen opacity={opacity} {...props}>
      {children}
    </Fullscreen>
  );
};

export default FullScreenOverlay;
