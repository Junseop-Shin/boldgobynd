import React from "react";
import styled from "styled-components";
import { businessInfo } from "../assets/Business";

const FooterSection = styled.footer`
  display: flex;
  background-color: #222;
  color: white;
  padding: 2rem 2rem 0.5rem;
  justify-content: center;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterDescription = styled.p`
  text-align: center;
  font-size: 14px;
  color: #aaa;
  line-height: 1.5;
  word-wrap: break-word;
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #9c9ea2;
  font-family: "BebasNeue", "Pretendard", "Apple SD Gothic Neo", "Malgun Gothic",
    "Nanum Gothic", "Noto Sans", "sans-serif";
  font-weight: bold;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <FooterContainer>
        <FooterDescription>
          {`${businessInfo.company}  |  대표 ${businessInfo.ceo}`}
        </FooterDescription>
        <FooterDescription>
          사업자등록번호 {businessInfo.businessRegistrationNumber}
        </FooterDescription>
        <FooterDescription>
          {`${businessInfo.phone}  |  ${businessInfo.email}`}
        </FooterDescription>
        <FooterDescription>{businessInfo.operatingTime}</FooterDescription>
        <FooterDescription>{businessInfo.address}</FooterDescription>
        <FooterBottom>
          <Copyright>
            COPYRIGHT ⓒ {currentYear} STUDIOBOLD ALL RIGHTS RESERVED.
          </Copyright>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
}
