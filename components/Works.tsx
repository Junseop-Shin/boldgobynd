import React from "react";
import styled from "styled-components";
import FadeUpAnimation from "./common/FadeUpAnimation";
import ImageGallery from "./common/ImageGallery";
import { galleryImages } from "../assets/Works";
import { WORKS_TITLE } from "../assets/Image";
import MobileResponsiveImage from "./common/MobileResponsiveImage";
import { MOBILE_BREAKPOINT, worksMenuOptions } from "../assets/common";

const WorksContainer = styled.div`
  width: 100%;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 94%;
  }
`;

const WorksTitleImage = styled(MobileResponsiveImage)`
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 2rem 0;
  }
`;

const WorksSubtitle = styled.p`
  font-size: 1.1rem;
  color: rgb(11, 11, 11);
  padding-bottom: 2rem;
  border-bottom: 4px solid black;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-weight: 350;
  }
`;

export default function Works() {
  return (
    <WorksContainer>
      <FadeUpAnimation>
        <WorksTitleImage
          src={WORKS_TITLE}
          alt="Explore BOLD"
          width={559}
          height={107}
          priority
        />
        <WorksSubtitle>
          <strong>BOLD</strong>의 다양한 분야의 포트폴리오를 소개합니다.
        </WorksSubtitle>
      </FadeUpAnimation>
      <ImageGallery categories={worksMenuOptions} images={galleryImages} />
    </WorksContainer>
  );
}
