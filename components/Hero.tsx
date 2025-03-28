import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  MAIN_SUBTITLE,
  MAIN_SUBTITLE_MOBILE,
  MAIN_TITLE,
  MAIN_TITLE_MOBILE,
} from "../assets/Image";
import FadeUpAnimation from "./FadeUpAnimation";
import ResponsiveImage from "./common/ResponsiveImage";

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  width: 1200px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 0 2rem;
`;

export default function Hero() {
  return (
    <HeroSection>
      <HeroContent>
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
      </HeroContent>
    </HeroSection>
  );
}
