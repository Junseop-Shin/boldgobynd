import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FadeUpAnimation from "./FadeUpAnimation";
import { businessInfo } from "../assets/Business";
import { MAIN_TITLE } from "../assets/Image";

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
  justify-content: center;
  align-items: center;
`;

const FooterContactTitle = styled(Image)`
  flex: 1;
  transition: opacity 0.3s ease;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const FooterContactBodyRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 10rem;
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
`;

const FooterContactSubtitleSection = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 4px solid black;
  border-bottom: 1px solid black;
  padding: 2rem 0.5rem;
  width: 48%;
`;

export default function FooterContact({ bg = "#d9ffe0" }: FooterContactProps) {
  return (
    <FooterContactSection bg={bg}>
      <FooterContactContainer>
        <FadeUpAnimation>
          <FooterContactTitle
            src={MAIN_TITLE}
            alt="Lead with BOLD"
            width={1200}
            height={240}
            priority
          />
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
        <FooterContactBodyRow>
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
                {businessInfo.email}
              </FooterContactSubtitle>
            </FadeUpAnimation>
          </FooterContactSubtitleSection>
        </FooterContactBodyRow>
      </FooterContactContainer>
    </FooterContactSection>
  );
}
