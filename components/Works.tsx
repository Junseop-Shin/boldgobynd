import React from "react";
import styled from "styled-components";
import Image from "next/image";
import FadeUpAnimation from "./common/FadeUpAnimation";
import ImageGallery from "./common/ImageGallery";
import { worksMenuOptions } from "./Header";
import { galleryImages } from "../assets/Works";
import { WORKS_TITLE } from "../assets/Image";
import FullWidthImage from "./common/FullWidthImage";

const WorksSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const WorksContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const WorksSubtitle = styled.p`
  font-size: 1.1rem;
  color: rgb(11, 11, 11);
  padding-bottom: 2rem;
  border-bottom: 4px solid black;
`;

export default function Works() {
  return (
    <WorksSection id="works">
      <WorksContainer>
        <FadeUpAnimation>
          <FullWidthImage
            src={WORKS_TITLE}
            alt="Lead with BOLD"
            width={2051}
            height={410}
            priority
          />
          <WorksSubtitle>
            <strong>BOLD</strong>의 다양한 분야의 포트폴리오를 소개합니다.
          </WorksSubtitle>
        </FadeUpAnimation>
        <ImageGallery categories={worksMenuOptions} images={galleryImages} />
      </WorksContainer>
    </WorksSection>
  );
}
