import React from "react";
import styled from "styled-components";
import { businessInfo } from "../assets/business";

const FooterSection = styled.footer`
  background: #222;
  color: #ccc;
  padding: 2.5rem 0;
`;

const FooterInner = styled.div`
  max-width: 1232px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
`;

const CompanyName = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const Info = styled.p`
  font-size: 0.95rem;
  color: #aaa;
  line-height: 1.9;
`;

const Copyright = styled.p`
  font-size: 0.82rem;
  color: #666;
  margin-top: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <FooterInner>
        <CompanyName>StudioBOLD</CompanyName>
        <Info>{businessInfo.email}</Info>
        <Info>{businessInfo.phone}</Info>
        <Copyright>
          Copyright © {currentYear} StudioBOLD All Rights Reserved.
        </Copyright>
      </FooterInner>
    </FooterSection>
  );
}
