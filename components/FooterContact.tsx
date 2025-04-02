import styled from "styled-components";
import Link from "next/link";
import FadeUpAnimation from "./common/FadeUpAnimation";
import { businessInfo } from "../assets/Business";
import { MAIN_TITLE } from "../assets/Image";
import Email from "./common/Email";
// import MobileResponsiveImage from "./common/MobileResponsiveImage";
import FullWidthImage from "./common/FullWidthImage";
import { MOBILE_BREAKPOINT } from "../assets/common";

interface FooterContactProps {
  bg?: string;
}

const FooterContactSection = styled.section<{ bg?: string }>`
  padding: 5rem 2rem;
  background-color: ${(props) => props.bg ?? "#d9ffe0"};
`;

const FooterContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;
`;

const FooterContactBodyRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FooterContactSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterContactSubtitle = styled.p`
  color: rgb(18, 18, 18);
  font-size: 20px;
  line-height: 1.8;
  font-weight: 350;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 16px;
    line-height: 1.2;
  }
`;

const FooterContactButton = styled.button`
  padding: 1rem 2rem;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 30px;
  width: 180px;
  height: 60px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 18px;
  font-weight: 600;
  align-items: center;
  text-align: center;
  align-self: flex-end;
  margin-bottom: 1rem;

  &:hover {
    background-color: white;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 0;
    font-size: 13px;
    font-weight: 400;
    border-radius: 20px;
    width: 100px;
    height: 40px;
  }
`;

const FooterContactBodyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  box-sizing: border-box;

  & > * {
    border-top: 4px solid black;
    border-bottom: 1px solid black;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: 1fr;
    gap: 0;

    & > *:nth-last-child(1) {
      border-top: 4px solid black;
    }

    & > *:nth-last-child(-n + 1) {
      border-top: 1px solid black;
      border-bottom: 4px solid black;
    }
  }
`;

const FooterContactSubtitleSection = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 4px solid black;
  border-bottom: 1px solid black;
  padding: 2rem 0.5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    & > * {
      display: flex;
      flex-direction: row;
      & > * {
        min-width: 25%;
      }
    }
  }
`;

export default function FooterContact({ bg = "#d9ffe0" }: FooterContactProps) {
  return (
    <FooterContactSection bg={bg}>
      <FooterContactContainer>
        <FadeUpAnimation>
          <FullWidthImage
            width={1250}
            height={150}
            src={MAIN_TITLE}
            alt="Lead with BOLD"
          />
          {/* 이미지 파일 교체 후 변경 필요 <MobileResponsiveImage
            width={1250}
            height={150}
            src={MAIN_TITLE}
            alt="Lead with BOLD"
          /> */}
        </FadeUpAnimation>
        <FooterContactBodyRow>
          <FooterContactSubtitleContainer>
            <FadeUpAnimation>
              <FooterContactSubtitle>
                <strong>&apos;대담함으로 앞장서다&apos;</strong>
              </FooterContactSubtitle>
              <FooterContactSubtitle>
                볼드의 비전과 함께 새로운 가능성을 만들어가요!
              </FooterContactSubtitle>
              <FooterContactSubtitle>
                다양한 프로젝트와 협업 문의를 언제든 환영합니다🔥
              </FooterContactSubtitle>
            </FadeUpAnimation>
          </FooterContactSubtitleContainer>
          <Link href="/contact" passHref>
            <FooterContactButton>문의하기</FooterContactButton>
          </Link>
        </FooterContactBodyRow>
        <FooterContactBodyGrid>
          <FooterContactSubtitleSection>
            <FadeUpAnimation>
              <FooterContactSubtitle>
                <strong>TEL</strong>
              </FooterContactSubtitle>
              <FooterContactSubtitle>
                {businessInfo.phone}
              </FooterContactSubtitle>
            </FadeUpAnimation>
          </FooterContactSubtitleSection>
          <FooterContactSubtitleSection>
            <FadeUpAnimation>
              <FooterContactSubtitle>
                <strong>E-MAIL</strong>
              </FooterContactSubtitle>
              <FooterContactSubtitle>
                <Email email={businessInfo.email} />
              </FooterContactSubtitle>
            </FadeUpAnimation>
          </FooterContactSubtitleSection>
        </FooterContactBodyGrid>
      </FooterContactContainer>
    </FooterContactSection>
  );
}
