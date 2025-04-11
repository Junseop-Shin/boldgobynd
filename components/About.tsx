import React from "react";
import styled from "styled-components";
import FadeUpAnimation from "./common/FadeUpAnimation";
import ImageCarousel from "./common/ImageCarousel";
import { carouselImages } from "../assets/works";
import {
  ABOUT_SUBTITLE,
  ABOUT_SUBTITLE_MOBILE,
  ABOUT_TITLE,
  ABOUT_TITLE_MOBILE,
} from "../assets/image";
import ResponsiveImage from "./common/ResponsiveImage";
import { MOBILE } from "../assets/common";

const AboutContainer = styled.div`
  width: 100%;

  @media ${MOBILE} {
    width: 90vw;
  }
`;

const ImageContainer = styled.div`
  margin: 3rem 0;
  width: 50vw;
  @media ${MOBILE} {
    width: 92vw;
  }
`;

const SectionTextContainer = styled.div`
  padding-left: 30vw;
  @media ${MOBILE} {
    padding-left: 0;
  }
`;

const SectionTitle = styled.p`
  text-align: left;
  font-size: 36px;
  color: rgb(199, 202, 207);
  letter-spacing: -1px;
  font-weight: 700;
  line-height: 1.2;
  word-break: keep-all;

  @media ${MOBILE} {
    font-size: 24px;
  }
`;

const SectionSubtitle = styled.p`
  text-align: left;
  font-size: 20px;
  color: rgb(141, 143, 147);
  letter-spacing: -1px;
  font-weight: 350;
  line-height: 1.8;
  word-break: keep-all;

  @media ${MOBILE} {
    font-size: 16px;
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <FadeUpAnimation>
        <ImageContainer>
          <ResponsiveImage
            src={ABOUT_TITLE}
            mobileSrc={ABOUT_TITLE_MOBILE}
            alt="Think BOLD, create Beyond"
            width={2500}
            height={795}
            priority
          />
        </ImageContainer>
      </FadeUpAnimation>
      <div>
        <FadeUpAnimation delay={0.1}>
          <SectionTextContainer>
            <SectionTitle>모든 도전은 새로운 기회의 시작이고,</SectionTitle>
            <SectionTitle>
              &apos;대담함&apos;이야말로 변화를 일으키는 원동력입니다.
            </SectionTitle>
            <SectionTitle>
              <br />
            </SectionTitle>
          </SectionTextContainer>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.1}>
          <SectionTextContainer>
            <SectionSubtitle>
              <strong>BOLD</strong>는 ‘대담함’을 핵심 가치로 삼아, 혁신적인
              시각과 접근법으로 새로운 기회를 발굴합니다.
            </SectionSubtitle>
            <SectionSubtitle>
              틀에 갇히지 않은 창의적인 솔루션을 제시하며,
            </SectionSubtitle>
            <SectionSubtitle>
              단순한 브랜드 구축을 넘어 한 발 앞선 대담함으로 미래를 짓습니다.
            </SectionSubtitle>
          </SectionTextContainer>
        </FadeUpAnimation>
      </div>
      <div style={{ margin: "3rem 0" }}>
        <ResponsiveImage
          src={ABOUT_SUBTITLE}
          mobileSrc={ABOUT_SUBTITLE_MOBILE}
          alt="Portfolio example"
          width={5334}
          height={1702}
          hoverScale
        />
      </div>
      <div>
        <FadeUpAnimation>
          <div>
            <SectionTitle>대담한 목표와 비전을 갖추면,</SectionTitle>
            <SectionTitle>한계를 넘어 무한한 가능성이 열립니다.</SectionTitle>
            <SectionTitle>
              <br />
            </SectionTitle>
          </div>
        </FadeUpAnimation>
        <FadeUpAnimation>
          <div>
            <SectionSubtitle>
              BOLD의 전략적 브랜드 솔루션은 고객이 시장에서 차별화된 입지를
              구축하고
            </SectionSubtitle>
            <SectionSubtitle>
              지속 가능한 성장을 위한 탄탄한 기반을 마련할 수 있도록 지원합니다.
            </SectionSubtitle>
            <SectionSubtitle>
              이를 통해 고객사는 브랜드 가치를 극대화하고, 장기적인 성장 동력을
              확보할 수 있습니다.
            </SectionSubtitle>
          </div>
        </FadeUpAnimation>
      </div>
      <ImageCarousel images={carouselImages} autoPlayInterval={5000} />
    </AboutContainer>
  );
}
