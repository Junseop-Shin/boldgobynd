import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import FadeUpAnimation from "./common/FadeUpAnimation";
import { Work } from "../assets/Works";
import FullWidthImage from "./common/FullWidthImage";
import { motion } from "framer-motion";

type TABLEPOSITION = "TOP" | "FIXED" | "BOTTOM";

const WorksDetailSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const WorksDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const WorkDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: relative;
`;

const WorksDetailTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-top: 4px solid black;
  border-bottom: 4px solid black;
  box-sizing: border-box;
  position: sticky;
  top: 180px;
  width: 100%;

  & > * {
    padding: 15px 0;
    border-bottom: 1px solid black;
    display: flex;
  }

  & > *:nth-last-child(-n + 2) {
    border-bottom: none;
  }
`;

const WorksTitle = styled.p`
  font-size: 1.1rem;
`;

const WorksTags = styled.div`
  display: flex;
  gap: 15px;
`;

const WorksTag = styled.p`
  background-color: rgb(234, 234, 234);
  font-size: 18px;
  padding: 2px 10px;
`;

const WorksMainImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  justify-self: flex-end;
`;

export default function WorksDetail({ work }: { work: Work }) {
  return (
    <WorksDetailSection>
      <WorksDetailContainer>
        <WorkDetailGrid>
          <FadeUpAnimation reAnimate={false}>
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
          </FadeUpAnimation>
          <WorksMainImageContainer>
            {work.allImages.map((image, index) => (
              <FullWidthImage
                width={1920}
                height={1227}
                key={image}
                src={image}
                alt={`Project Example ${index + 1}`}
                cover
              />
            ))}
          </WorksMainImageContainer>
        </WorkDetailGrid>
      </WorksDetailContainer>
    </WorksDetailSection>
  );
}
