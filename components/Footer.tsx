import React from "react";
import styled from "styled-components";

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

const footerList = {
  company: "BOLD (볼드)",
  ceo: "신혜승",
  businessRegistrationNumber: "201-18-99848",
  phone: "070. 8080. 3150",
  email: "bold@studiobold.co.kr",
  operatingTime: "월-금 09:00 - 17:00 ㅣ 토,일,공휴일 휴무",
  address: "서울특별시 양천구 신정중앙로 77 경동빌딩 4층",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <FooterContainer>
        <FooterDescription>
          {`${footerList.company}  |  대표 ${footerList.ceo}`}
        </FooterDescription>
        <FooterDescription>
          사업자등록번호 {footerList.businessRegistrationNumber}
        </FooterDescription>
        <FooterDescription>
          {`${footerList.phone}  |  ${footerList.email}`}
        </FooterDescription>
        <FooterDescription>{footerList.operatingTime}</FooterDescription>
        <FooterDescription>{footerList.address}</FooterDescription>
        <FooterBottom>
          <Copyright>
            COPYRIGHT ⓒ {currentYear} STUDIOBOLD ALL RIGHTS RESERVED.
          </Copyright>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
}
