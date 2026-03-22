import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { MAIN_TITLE, MAIN_SUBTITLE, MAIN_TITLE_MOBILE } from "../assets/image";
import { MOBILE } from "../assets/common";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  @media ${MOBILE} {
    cursor: default;
    height: auto;
    position: static;
  }
`;

const MobileHero = styled.div`
  display: none;
  width: 100%;
  line-height: 0;

  @media ${MOBILE} {
    display: block;
  }
`;

/* 데스크톱: section 전체를 채우는 컨테이너 */
const Grid = styled.div`
  position: absolute;
  inset: 0;

  @media ${MOBILE} {
    display: none;
  }
`;

/* 각 이미지를 section 세로 중앙에 배치 */
const ImgWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  line-height: 0;
`;

const TitleWrap = styled(ImgWrap)`
  opacity: 1;
  transition: opacity 0.7s ease;
  z-index: 1;

  @media not all and ${MOBILE} {
    ${Section}:hover & {
      opacity: 0;
    }
  }
`;

const SubtitleWrap = styled(ImgWrap)`
  opacity: 0;
  transform: translateY(-50%) scale(1);
  transition: opacity 0.7s ease, transform 0.7s ease;
  z-index: 2;

  @media not all and ${MOBILE} {
    ${Section}:hover & {
      opacity: 1;
      transform: translateY(-50%) scale(1.06);
    }
  }
`;

const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
  display: "block",
};

export default function Hero() {
  return (
    <Section>
      {/* Mobile */}
      <MobileHero>
        <Image
          src={MAIN_TITLE_MOBILE}
          alt="Lead with BOLD"
          width={1080}
          height={1080}
          style={imgStyle}
          sizes="100vw"
          priority
        />
      </MobileHero>

      {/* Desktop */}
      <Grid>
        <TitleWrap>
          <Image
            src={MAIN_TITLE}
            alt="Lead with BOLD"
            width={5334}
            height={645}
            style={imgStyle}
            sizes="100vw"
            priority
          />
        </TitleWrap>
        <SubtitleWrap>
          <Image
            src={MAIN_SUBTITLE}
            alt="Bold Portfolio"
            width={5334}
            height={1687}
            style={imgStyle}
            sizes="100vw"
          />
        </SubtitleWrap>
      </Grid>
    </Section>
  );
}
