import React from "react";
import styled from "styled-components";
import Image from "next/image";
import FadeUpAnimation from "./FadeUpAnimation";
import ImageGallery from "./ImageGallery";
import { worksMenuOptions } from "./Header";

const galleryImages = [
  {
    src: "/resources/gallery/ad1.jpg",
    title: "홈&라이프스타일 큐레이션 플랫폼 DIBAMBI",
    description:
      "홈&라이프스타일 큐레이션 플랫폼 DIBAMBI 브랜드리뉴얼 및 제품디자인",
    link: "/works/dibambi",
    tags: ["BRANDING", "PACKAGE"],
  },
  {
    src: "/resources/gallery/ad1.jpg",
    title: "영상전문프로덕션 PRODUCTION 4:2",
    description: "로고 및 브랜드가이드 제작",
    link: "/works/production42",
    tags: ["BRANDING"],
  },
  {
    src: "/resources/gallery/ad1.jpg",
    title: "홈&프리미엄 비건 두유 그릭요거트 브랜드 VEGREEK",
    description: "그릭요거트 제품 리브랜딩",
    link: "/works/vegreek",
    tags: ["BRANDING", "PACKAGE"],
  },
  {
    src: "/resources/gallery/ad1.jpg",
    title: "프리미엄 OPTICAL PPF 브랜드 ONYXHIELD",
    description: "온·오프라인 ASSET 제작",
    link: "/works/onyxhield",
    tags: ["BRANDING", "AD·EDITORIAL"],
  },
  {
    src: "/resources/gallery/ad1.jpg",
    title: "더현대 프레젠트(THE HYUNDAI PRESENT) with JACKPOD NEWYORK",
    description: "스마트워치 스트랩 패키지 제작",
    link: "/works/jackpod",
    tags: ["PACKAGE"],
  },
  {
    src: "/resources/gallery/ad1.jpg",
    title: "블랜딩찻집 CAFE CHAWAN",
    description: "차완마음강화티_POSTEACARD 패키지 제작",
    link: "/works/chawan",
    tags: ["PACKAGE"],
  },
  {
    src: "/resources/gallery/ad1.jpg",
    title: "CAFE385",
    description: "부산 바다 소금 카라멜 BUSAN CARAMEL 패키지 제작",
    link: "/works/cafe385",
    tags: ["PACKAGE"],
  },
  {
    src: "/resources/gallery/ad1.jpg",
    title: "자연주의 스킨케어 브랜드 B:DERMATIC",
    description: "로고 리뉴얼 및 비건 라인 패키지 제작",
    link: "/works/bdermatic",
    tags: ["PACKAGE"],
  },
  {
    src: "/resources/gallery/ad1.jpg",
    title: "프리미엄 반려동물 라이프 스타일 브랜드 PEALTH",
    description: "펫용 제품 패키지 제작",
    link: "/works/pealth",
    tags: ["PACKAGE"],
  },
  {
    src: "/resources/gallery/ad1.jpg",
    title: "토탈 윈도우 필름 전문기업 RAYNO",
    description: "윈도우 필름 심볼 개발 및 온·오프라인 ASSET 제작",
    link: "/works/rayno",
    tags: ["AD·EDITORIAL"],
  },
  {
    src: "/resources/gallery/ad1.jpg",
    title: "프리미엄 카워시 서비스 브랜드 AUTONOVA",
    description: "온·오프라인 ASSET 제작",
    link: "/works/autonova",
    tags: ["AD·EDITORIAL"],
  },
  {
    src: "/resources/gallery/ad1.jpg",
    title: "수제 츄러스 전문점 시나몬하우스 CINNAMONHAUS",
    description: "창업박람회 압축브로셔 제작",
    link: "/works/cinnamonhaus",
    tags: ["AD·EDITORIAL"],
  },
];

const WorksSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const WorksContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const WorksTitle = styled(Image)`
  flex: 1;
  transition: opacity 0.3s ease;
  margin-top: 4rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const WorksSubtitle = styled.p`
  font-size: 1.1rem;
  color: rgb(11, 11, 11);
  padding-bottom: 2rem;
  border-bottom: 4px solid black;
`;

export default function Works() {
  return (
    <WorksSection id="works">
      <WorksContainer>
        <FadeUpAnimation>
          <WorksTitle
            src="/resources/Works_Title.png"
            alt="Lead with BOLD"
            width={500}
            height={100}
            priority
          />
          <WorksSubtitle>
            <strong>BOLD</strong>의 다양한 분야의 포트폴리오를 소개합니다.
          </WorksSubtitle>
        </FadeUpAnimation>
        <ImageGallery tags={worksMenuOptions} images={galleryImages} />
      </WorksContainer>
    </WorksSection>
  );
}
