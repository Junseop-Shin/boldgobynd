import React from "react";
import styled from "styled-components";
import FadeUpAnimation from "./common/FadeUpAnimation";
import ImageGallery from "./common/ImageGallery";
import MobileResponsiveImage from "./common/MobileResponsiveImage";
import { MOBILE, worksMenuOptions } from "../assets/common";
import { WORKS_TITLE } from "../assets/image";
import { galleryImages } from "../assets/works";

const WorksContainer = styled.div`
  width: 100%;
  padding-top: 4rem;

  @media ${MOBILE} {
    width: 94%;
    padding-top: 1rem;
  }
`;
const WorksHeader = styled(FadeUpAnimation)`
  padding: 3rem 0;

  @media ${MOBILE} {
    padding: 0;
  }
`;

const WorksTitleImage = styled(MobileResponsiveImage)`
  @media ${MOBILE} {
    padding: 2rem 0;
  }
`;

const WorksSubtitle = styled.p`
  font-size: 1.1rem;
  color: rgb(11, 11, 11);
  padding-bottom: 2rem;
  border-bottom: 4px solid black;

  @media ${MOBILE} {
    font-weight: 350;
  }
`;

export default function Works() {
  return (
    <WorksContainer>
      <WorksHeader>
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
      </WorksHeader>
      <ImageGallery categories={worksMenuOptions} images={galleryImages} />
    </WorksContainer>
  );
}
