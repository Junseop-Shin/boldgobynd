import React, { useState } from "react";
import styled from "styled-components";
import FadeUpAnimation from "./FadeUpAnimation";
import { motion } from "framer-motion";

const PortfolioSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
`;

const PortfolioContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: #0070f3;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1.5rem;
  background-color: ${(props) => (props.active ? "#0070f3" : "white")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: 1px solid ${(props) => (props.active ? "#0070f3" : "#ddd")};
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#0070f3" : "#f0f0f0")};
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const PortfolioItem = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  cursor: pointer;
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
`;

const PortfolioOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 112, 243, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  color: white;
  text-align: center;
`;

const PortfolioTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const PortfolioCategory = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  padding: 2rem;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalImage = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ModalDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

interface PortfolioItemType {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(
    null
  );

  const portfolioItems: PortfolioItemType[] = [
    {
      id: 1,
      title: "기업 웹사이트 리디자인",
      category: "web",
      image: "/portfolio-1.jpg",
      description:
        "글로벌 기업의 웹사이트를 현대적이고 사용자 친화적인 디자인으로 리뉴얼했습니다. 반응형 디자인을 적용하여 모든 디바이스에서 최적의 경험을 제공합니다.",
    },
    {
      id: 2,
      title: "이커머스 모바일 앱",
      category: "app",
      image: "/portfolio-2.jpg",
      description:
        "패션 브랜드를 위한 iOS 및 Android 이커머스 앱을 개발했습니다. 사용자 친화적인 UI와 빠른 결제 프로세스로 높은 전환율을 달성했습니다.",
    },
    {
      id: 3,
      title: "브랜드 아이덴티티 디자인",
      category: "branding",
      image: "/portfolio-3.jpg",
      description:
        "스타트업을 위한 브랜드 아이덴티티를 개발했습니다. 로고, 색상 팔레트, 타이포그래피 등 브랜드의 모든 시각적 요소를 디자인했습니다.",
    },
    {
      id: 4,
      title: "소셜 미디어 마케팅 캠페인",
      category: "marketing",
      image: "/portfolio-4.jpg",
      description:
        "식품 브랜드를 위한 소셜 미디어 마케팅 캠페인을 기획하고 실행했습니다. 인스타그램과 페이스북을 통해 높은 참여율과 브랜드 인지도를 달성했습니다.",
    },
    {
      id: 5,
      title: "반응형 랜딩 페이지",
      category: "web",
      image: "/portfolio-5.jpg",
      description:
        "제품 출시를 위한 반응형 랜딩 페이지를 디자인하고 개발했습니다. 높은 전환율을 위한 UX 최적화를 진행했습니다.",
    },
    {
      id: 6,
      title: "헬스케어 모바일 앱",
      category: "app",
      image: "/portfolio-6.jpg",
      description:
        "사용자의 건강 데이터를 추적하고 관리하는 헬스케어 모바일 앱을 개발했습니다. 직관적인 UI와 데이터 시각화 기능을 구현했습니다.",
    },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <PortfolioSection id="portfolio">
      <PortfolioContainer>
        <FadeUpAnimation>
          <SectionTitle>Our Portfolio</SectionTitle>
        </FadeUpAnimation>

        <FadeUpAnimation delay={0.2}>
          <FilterButtons>
            <FilterButton
              active={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All
            </FilterButton>
            <FilterButton
              active={filter === "web"}
              onClick={() => setFilter("web")}
            >
              Web Design
            </FilterButton>
            <FilterButton
              active={filter === "app"}
              onClick={() => setFilter("app")}
            >
              App Development
            </FilterButton>
            <FilterButton
              active={filter === "branding"}
              onClick={() => setFilter("branding")}
            >
              Branding
            </FilterButton>
            <FilterButton
              active={filter === "marketing"}
              onClick={() => setFilter("marketing")}
            >
              Marketing
            </FilterButton>
          </FilterButtons>
        </FadeUpAnimation>

        <PortfolioGrid>
          {filteredItems.map((item, index) => (
            <FadeUpAnimation key={item.id} delay={0.1 * index}>
              <PortfolioItem
                whileHover={{ y: -10 }}
                onClick={() => setSelectedItem(item)}
              >
                <PortfolioImage src={item.image} alt={item.title} />
                <PortfolioOverlay
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <PortfolioTitle>{item.title}</PortfolioTitle>
                  <PortfolioCategory>{item.category}</PortfolioCategory>
                </PortfolioOverlay>
              </PortfolioItem>
            </FadeUpAnimation>
          ))}
        </PortfolioGrid>
      </PortfolioContainer>

      {selectedItem && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
        >
          <ModalContent
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={() => setSelectedItem(null)}>✕</CloseButton>
            <ModalImage src={selectedItem.image} alt={selectedItem.title} />
            <ModalTitle>{selectedItem.title}</ModalTitle>
            <ModalDescription>{selectedItem.description}</ModalDescription>
          </ModalContent>
        </ModalOverlay>
      )}
    </PortfolioSection>
  );
}
