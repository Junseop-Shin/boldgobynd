import React from "react";
import styled from "styled-components";
import FadeUpAnimation from "./common/FadeUpAnimation";
import ImageCarousel from "./common/ImageCarousel";
import { workDetailFooterImages } from "../assets/works";
import { MOBILE } from "../assets/common";

const WorksDetailFooterContainer = styled.div`
  width: 100%;

  @media ${MOBILE} {
    width: 96%;
  }
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
    <WorksDetailFooterContainer>
      <FadeUpAnimation>
        <WorksFooterTitle>OTHER PROJECTS</WorksFooterTitle>
      </FadeUpAnimation>
      <ImageCarousel images={workDetailFooterImages} isLinked />
    </WorksDetailFooterContainer>
  );
}
