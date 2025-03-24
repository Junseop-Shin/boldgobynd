import React from "react";
import styled from "styled-components";
import FadeUpAnimation from "./FadeUpAnimation";
import {
  FaDesktop,
  FaMobileAlt,
  FaShoppingCart,
  FaChartLine,
} from "react-icons/fa";

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const ServicesContainer = styled.div`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #0070f3;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

export default function Services() {
  const services = [
    {
      icon: <FaDesktop />,
      title: "웹 디자인 & 개발",
      description:
        "모던하고 반응형 웹사이트를 디자인하고 개발합니다. 사용자 경험을 최우선으로 고려합니다.",
    },
    {
      icon: <FaMobileAlt />,
      title: "모바일 앱 개발",
      description:
        "iOS와 Android 플랫폼을 위한 네이티브 및 하이브리드 모바일 애플리케이션을 개발합니다.",
    },
    {
      icon: <FaShoppingCart />,
      title: "이커머스 솔루션",
      description:
        "온라인 쇼핑몰 구축부터 결제 시스템 연동, 재고 관리까지 완벽한 이커머스 솔루션을 제공합니다.",
    },
    {
      icon: <FaChartLine />,
      title: "디지털 마케팅",
      description:
        "SEO, 소셜 미디어 마케팅, 콘텐츠 마케팅 등 효과적인 디지털 마케팅 전략을 수립하고 실행합니다.",
    },
  ];

  return (
    <ServicesSection id="services">
      <ServicesContainer>
        <FadeUpAnimation>
          <SectionTitle>Our Services</SectionTitle>
        </FadeUpAnimation>
        <ServicesGrid>
          {services.map((service, index) => (
            <FadeUpAnimation key={index} delay={0.2 * index}>
              <ServiceCard>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            </FadeUpAnimation>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
}
