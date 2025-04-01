import React from "react";
import styled from "styled-components";
import FadeUpAnimation from "./FadeUpAnimation";
import ImageCarousel from "./common/ImageCarousel";
import { workDetailFooterImages } from "../assets/Works";

const WorksDetailFooterSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const WorksDetailFooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const WorksFooterTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  color: rgb(11, 11, 11);
  margin-bottom: -3rem;
`;

export default function WorksDetailFooter() {
  return (
    <WorksDetailFooterSection>
      <WorksDetailFooterContainer>
        <FadeUpAnimation>
          <WorksFooterTitle>OTHER PROJECTS</WorksFooterTitle>
        </FadeUpAnimation>
        <ImageCarousel images={workDetailFooterImages} isLinked />
      </WorksDetailFooterContainer>
    </WorksDetailFooterSection>
  );
}
