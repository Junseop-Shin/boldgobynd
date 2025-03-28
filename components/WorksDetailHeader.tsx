import React from "react";
import styled from "styled-components";
import Image from "next/image";
import FadeUpAnimation from "./FadeUpAnimation";
import { Work } from "../assets/Works";
import { WORKS_TITLE } from "../assets/Image";

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

const WorksMainImage = styled(Image)`
  flex: 1;
  transition: opacity 0.3s ease;
  margin: 4rem 0;
  width: 100%;
  min-height: 300px;
  object-fit: contain;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
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

const WorksTag = styled.p`
  background-color: rgb(234, 234, 234);
  font-size: 18px;
  padding: 0 15px;
`;

const WorksDescriptionDetail = styled.p`
  font-size: 18px;
  color: rgb(11, 11, 11);
  line-height: 2;
`;

export default function WorksDetailHeader({ work }: { work: Work }) {
  console.log(work);
  return (
    <WorksDetailHeaderSection>
      <WorksDetailHeaderContainer>
        <WorksMainImage
          src={work.mainImage}
          alt="Lead with BOLD"
          width={500}
          height={0}
          priority
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
