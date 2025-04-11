import React from "react";
import styled from "styled-components";
import { Work } from "../assets/works";
import FullWidthImage from "./common/FullWidthImage";
import { MOBILE } from "../assets/common";

const WorkDetailGrid = styled.div`
  display: flex;
  padding: 5rem 0;
  position: relative;
  gap: 3rem;
`;

const WorkDetailTableContainer = styled.div`
  width: 430px;
  position: relative;
  flex-shrink: 0;

  @media ${MOBILE} {
    display: none;
  }
`;

const WorksDetailTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-top: 4px solid black;
  box-sizing: border-box;
  position: sticky;
  top: 180px;

  & > * {
    padding: 15px 0;
    border-bottom: 1px solid black;
    display: flex;
  }
`;

const WorksTitle = styled.p`
  font-size: 16px;
  letter-spacing: -1;
`;

const WorksTags = styled.div`
  display: flex;
  gap: 10px;
`;

const WorksTag = styled.p`
  background-color: rgb(234, 234, 234);
  font-size: 16px;
  letter-spacing: -1;
  padding: 0 10px;
`;

const WorksMainImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  justify-self: flex-end;

  @media ${MOBILE} {
    width: 100%;
    justify-self: center;
  }
`;

export default function WorksDetail({ work }: { work: Work }) {
  return (
    <WorkDetailGrid>
      <WorkDetailTableContainer>
        <WorksDetailTable>
          <WorksTitle>CLIENT</WorksTitle>
          <WorksTitle>{work.client}</WorksTitle>
          <WorksTitle>CATEGORY</WorksTitle>
          <WorksTags>
            {work.categories.map((tag) => (
              <WorksTag key={tag}>{tag}</WorksTag>
            ))}
          </WorksTags>
          <WorksTitle>YEAR</WorksTitle>
          <WorksTitle>{work.year}</WorksTitle>
        </WorksDetailTable>
      </WorkDetailTableContainer>
      <WorksMainImageContainer>
        {work.allImages.map((image, index) => (
          <FullWidthImage
            width={1920}
            height={1227}
            key={image}
            src={image}
            sizes={`${MOBILE} 1000px, 1500px`}
            alt={`Project Example ${index + 1}`}
            cover
          />
        ))}
      </WorksMainImageContainer>
    </WorkDetailGrid>
  );
}
