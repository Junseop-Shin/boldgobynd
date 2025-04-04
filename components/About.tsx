import React from "react";
import styled from "styled-components";
import FadeUpAnimation from "./common/FadeUpAnimation";
import ImageCarousel from "./common/ImageCarousel";
import { carouselImages } from "../assets/Works";
import {
  ABOUT_SUBTITLE,
  ABOUT_SUBTITLE_MOBILE,
  ABOUT_TITLE,
  ABOUT_TITLE_MOBILE,
} from "../assets/Image";
import ResponsiveImage from "./common/ResponsiveImage";
import { MOBILE_BREAKPOINT } from "../assets/common";

const AboutContainer = styled.div`
  width: 100%;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 94%;
  }
`;

const SectionTitle = styled.p`
  text-align: left;
  font-size: 36px;
  color: rgb(199, 202, 207);
  letter-spacing: -1px;
  font-weight: 700;
  line-height: 1.3;
`;

const SectionSubtitle = styled.p`
  color: rgb(141, 143, 147);
  font-size: 20px;
  text-align: left;
  font-weight: 350;
  line-height: 1.8;
`;

export default function About() {
  return (
    <AboutContainer>
      <FadeUpAnimation>
        <div style={{ margin: "3rem 0" }}>
          <ResponsiveImage
            src={ABOUT_TITLE}
            mobileSrc={ABOUT_TITLE_MOBILE}
            alt="Think BOLD, create Beyond"
            width={2500}
            height={795}
            priority
          />
        </div>
      </FadeUpAnimation>
      <div>
        <FadeUpAnimation delay={0.1}>
          <div>
            <SectionTitle>모든 도전은 기회가 되며,</SectionTitle>
            <SectionTitle>
              &apos;대담함&apos;이야말로 변화를 일으키는 원동력입니다.
            </SectionTitle>
            <SectionTitle>
              <br />
            </SectionTitle>
          </div>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.1}>
          <div>
            <SectionSubtitle>
              <strong>BOLD</strong>는 ‘대담함’을 핵심 가치로 삼아, 혁신적인
              시각과 접근법으로 새로운 가능성을 열어갑니다.
            </SectionSubtitle>
            <SectionSubtitle>
              기존의 틀을 넘어서는 창의적인 솔루션을 제시하며,
            </SectionSubtitle>
            <SectionSubtitle>
              고객이 한층 더 미래 지향적인 방향으로 나아갈 수 있도록 함께합니다.
            </SectionSubtitle>
          </div>
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
