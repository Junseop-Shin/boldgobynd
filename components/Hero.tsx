import React from "react";
import {
  MAIN_SUBTITLE,
  MAIN_SUBTITLE_MOBILE,
  MAIN_TITLE,
  MAIN_TITLE_MOBILE,
} from "../assets/Image";
import FadeUpAnimation from "./common/FadeUpAnimation";
import ResponsiveImage from "./common/ResponsiveImage";

export default function Hero() {
  return (
    <>
      <FadeUpAnimation delay={0.5}>
        <ResponsiveImage
          width={5334}
          height={645}
          src={MAIN_TITLE}
          mobileSrc={MAIN_TITLE_MOBILE}
          alt="Lead with BOLD"
          priority
        />
      </FadeUpAnimation>
      <FadeUpAnimation delay={1}>
        <ResponsiveImage
          width={5334}
          height={1687}
          src={MAIN_SUBTITLE}
          mobileSrc={MAIN_SUBTITLE_MOBILE}
          hoverScale
          alt="Portfolio example"
        />
      </FadeUpAnimation>
    </>
  );
}
