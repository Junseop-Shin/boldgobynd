import React, { useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import ImageGallery from "./common/ImageGallery";
import { MOBILE, worksMenuOptions } from "../assets/common";
import { ABOUT_TITLE } from "../assets/image";
import { galleryImages } from "../assets/works";

/* 히어로: Section 패딩(5rem 2rem) 상쇄, 헤더 높이(72px)만큼 아래 여백 노출 */
const HeroWrap = styled.div`
  margin: -5rem -2rem 0;
  min-height: calc(100vh - 72px);
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IntroSection = styled.div`
  padding: 7rem 0 2rem;

  @media ${MOBILE} {
    padding: 3.5rem 0 1.5rem;
  }
`;

const IntroBold = styled.p`
  font-size: 1.35rem;
  font-weight: 700;
  color: #111;
  line-height: 1.5;
  margin-bottom: 1rem;
  word-break: keep-all;

  @media ${MOBILE} {
    font-size: 1.05rem;
  }
`;

const IntroDesc = styled.p`
  font-size: 1.05rem;
  color: #555;
  line-height: 1.8;
  word-break: keep-all;

  @media ${MOBILE} {
    font-size: 0.88rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 3px;
  background: #111;
  margin-top: 2.5rem;
`;

const WorksContainer = styled.div`
  width: 100%;
`;

const ContentWrap = styled.div`
  max-width: 1232px;
  width: 100%;
  padding: 0 24px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export default function Works() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <WorksContainer>
      <HeroWrap>
        <Image
          src={ABOUT_TITLE}
          alt="Think Bold, Create Beyond"
          width={2500}
          height={795}
          style={{ width: "52%", height: "auto", display: "block" }}
          priority
        />
      </HeroWrap>

      <ContentWrap>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <IntroSection>
            <IntroBold>
              볼드는 브랜드가 가장 자신답게 보일 수 있는 방법을,<br />
              다양한 맥락 속에서 만들어 갑니다.
            </IntroBold>
            <IntroDesc>
              우리가 만든 브랜드는 단순히 &apos;보여지는 것&apos;이 아니라,<br />
              그 안에 담긴 이야기와 가치가 진심으로 전달되도록 설계된 결과입니다.<br />
              지금까지 우리가 함께 만든 다양한 브랜드의 여정을 확인해보세요.
            </IntroDesc>
          </IntroSection>
        </motion.div>

        <Divider />

        <ImageGallery categories={worksMenuOptions} images={galleryImages} />
      </ContentWrap>
    </WorksContainer>
  );
}
