import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MAIN_SUBTITLE, MAIN_TITLE } from "../assets/Image";

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
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 0 2rem;
`;

const HeroTitle = styled(Image)`
  flex: 1;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(Image)`
  flex: 1;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle
          src={MAIN_TITLE}
          alt="Lead with BOLD"
          width={1200}
          height={240}
          priority
        />
        <motion.div whileHover={{ scale: 1.1 }}>
          <HeroSubtitle
            src={MAIN_SUBTITLE}
            alt="Portfolio example"
            width={1200}
            height={460}
            priority
          />
        </motion.div>
      </HeroContent>
    </HeroSection>
  );
}
