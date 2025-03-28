import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import FadeUpAnimation from "./FadeUpAnimation";
import { GalleryImage } from "./ImageGallery";

type WorksDetailProps = GalleryImage & {
  images: string[];
  client: string;
  year: string;
};

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

const WorksDetailTable = styled.div<{
  tablePosition: TABLEPOSITION;
  top: number;
}>`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-top: 4px solid black;
  border-bottom: 4px solid black;
  box-sizing: border-box;
  position: ${(props) =>
    props.tablePosition === "FIXED" ? "fixed" : "relative"};
  top: ${(props) => props.top}px;

  & > * {
    padding: 15px 0;
    border-bottom: 1px solid black;
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
  padding: 0 15px;
`;

const WorksMainImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  justify-self: flex-end;
`;

const WorksMainImage = styled(Image)`
  flex: 1;
  transition: opacity 0.3s ease;
  width: 100%;
  height: 250px;
  object-fit: cover;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export default function WorksDetail(workDetail: WorksDetailProps) {
  const [tablePosition, setTablePosition] = useState<TABLEPOSITION>("TOP");
  const [tableTop, setTableTop] = useState(0);
  const tableRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (tableRef?.current && containerRef?.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const tableRect = tableRef.current.getBoundingClientRect();
        const containerTop = containerRect.top;
        const containerBottom = containerRect.bottom - tableRect.height;
        const tableFixedTop = 180;

        if (containerTop >= tableFixedTop) {
          setTablePosition("TOP");
          setTableTop(0);
        } else if (
          containerTop <= tableFixedTop &&
          containerBottom > tableFixedTop
        ) {
          setTablePosition("FIXED");
          setTableTop(tableFixedTop);
        } else if (containerBottom <= tableFixedTop) {
          setTablePosition("BOTTOM");
          setTableTop(containerRect.height - tableRect.height);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <WorksDetailSection>
      <WorksDetailContainer ref={containerRef}>
        <WorkDetailGrid>
          <FadeUpAnimation>
            <WorksDetailTable
              ref={tableRef}
              tablePosition={tablePosition}
              top={tableTop}
            >
              <WorksTitle>CLIENT</WorksTitle>
              <WorksTitle>{workDetail.client}</WorksTitle>
              <WorksTitle>CATEGORY</WorksTitle>
              <WorksTags>
                {workDetail.tags.map((tag) => (
                  <WorksTag key={tag}>{tag}</WorksTag>
                ))}
              </WorksTags>
              <WorksTitle>YEAR</WorksTitle>
              <WorksTitle>{workDetail.year}</WorksTitle>
            </WorksDetailTable>
          </FadeUpAnimation>
          <WorksMainImageContainer>
            {workDetail.images.map((image, index) => (
              <WorksMainImage
                key={image}
                src={image}
                alt={`Project Example ${index + 1}`}
                width={500}
                height={100}
                priority
              />
            ))}
          </WorksMainImageContainer>
        </WorkDetailGrid>
      </WorksDetailContainer>
    </WorksDetailSection>
  );
}
