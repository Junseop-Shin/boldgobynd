import React from "react";
import styled from "styled-components";
import FadeUpAnimation from "./common/FadeUpAnimation";
import { Work } from "../assets/Works";
import FullWidthImage from "./common/FullWidthImage";
import { MOBILE_BREAKPOINT } from "../assets/common";

const WorksDetailHeaderBody = styled.div`
  padding: 3rem 2rem 0;
`;

const WorksTitle = styled.p`
  font-size: 30px;
  color: rgb(11, 11, 11);
  line-height: 1.5;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 24px;
  }
`;

const WorksTags = styled.div`
  display: flex;
  gap: 15px;
  margin: 2.5rem 0;
`;

const WorksTag = styled.label`
  background-color: rgb(234, 234, 234);
  font-size: 18px;
  padding: 2px 10px;
`;

const WorksDescriptionDetail = styled.label`
  font-size: 18px;
  color: rgb(11, 11, 11);
  line-height: 2;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 15px;
    line-height: 1.8;
  }
`;

export default function WorksDetailHeader({ work }: { work: Work }) {
  return (
    <>
      <FullWidthImage
        width={1919}
        height={933}
        src={work.mainImage}
        alt="Lead with BOLD"
      />
      <WorksDetailHeaderBody>
        <FadeUpAnimation>
          <WorksTitle>{work.titleDesc}</WorksTitle>
          <WorksTitle>
            <strong>{work.categoryDesc}</strong>
          </WorksTitle>
        </FadeUpAnimation>
        <FadeUpAnimation>
          <WorksTags>
            {work.categories?.map((tag) => (
              <WorksTag key={tag}>{tag}</WorksTag>
            ))}
          </WorksTags>
        </FadeUpAnimation>
        <FadeUpAnimation>
          <WorksDescriptionDetail>{work.workDetail}</WorksDescriptionDetail>
        </FadeUpAnimation>
      </WorksDetailHeaderBody>
    </>
  );
}
