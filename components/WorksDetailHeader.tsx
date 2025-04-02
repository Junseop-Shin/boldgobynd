import React from "react";
import styled from "styled-components";
import FadeUpAnimation from "./common/FadeUpAnimation";
import { Work } from "../assets/Works";
import FullWidthImage from "./common/FullWidthImage";

const WorksDetailHeaderSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const WorksDetailHeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const WorksDetailHeaderGrid = styled.div`
  margin: 0 200px;
`;

const WorksMainImage = styled(FullWidthImage)`
  margin: 5rem 0;
`;

const WorksTitle = styled.p`
  font-size: 30px;
  color: rgb(11, 11, 11);
  line-height: 1.5;
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
`;

export default function WorksDetailHeader({ work }: { work: Work }) {
  return (
    <WorksDetailHeaderSection>
      <WorksDetailHeaderContainer>
        <WorksMainImage
          width={1919}
          height={933}
          src={work.mainImage}
          alt="Lead with BOLD"
        />
        <WorksDetailHeaderGrid>
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
        </WorksDetailHeaderGrid>
      </WorksDetailHeaderContainer>
    </WorksDetailHeaderSection>
  );
}
