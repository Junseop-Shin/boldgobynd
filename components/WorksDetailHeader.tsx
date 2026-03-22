import React from "react";
import styled from "styled-components";
import Image from "next/image";
import FadeUpAnimation from "./common/FadeUpAnimation";
import { Work } from "../assets/works";
import { MOBILE } from "../assets/common";

/* 히어로 이미지: Section 패딩(5rem 2rem)을 상쇄해 전체폭으로 */
const HeroWrap = styled.div`
  margin: -5rem -2rem 0;
  line-height: 0;
`;

/* 설명글: 이미지 열 시작점(테이블 430px + gap 3rem)에 맞춤 */
const WorksDetailHeaderBody = styled.div`
  padding: 3rem 2rem 0;
  padding-left: calc(430px + 3rem);

  @media ${MOBILE} {
    padding-left: 0;
    width: 92vw;
  }
`;

const WorksTitle = styled.p`
  font-size: 30px;
  color: rgb(11, 11, 11);
  line-height: 1.5;

  @media ${MOBILE} {
    font-size: 18px;
  }
`;

const WorksTags = styled.div`
  display: flex;
  gap: 15px;
  margin: 2.5rem 0;

  @media ${MOBILE} {
    gap: 5px;
    margin: 1.5rem 0;
  }
`;

const WorksTag = styled.label`
  background-color: rgb(234, 234, 234);
  font-size: 18px;
  padding: 2px 10px;

  @media ${MOBILE} {
    background-color: transparent;
    font-size: 14px;
    color: rgb(165, 165, 165);
  }
`;

const WorksDescriptionDetail = styled.label`
  font-size: 18px;
  color: rgb(11, 11, 11);
  line-height: 2;

  @media ${MOBILE} {
    font-size: 13px;
    line-height: 1.5;
    letter-spacing: -1;
  }
`;

export default function WorksDetailHeader({ work }: { work: Work }) {
  return (
    <>
      <HeroWrap>
        <Image
          src={work.mainImage}
          alt="Lead with BOLD"
          width={1919}
          height={933}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
      </HeroWrap>
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
