import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";

const FooterSection = styled.footer`
  background-color: #222;
  color: white;
  padding: 4rem 2rem 2rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const FooterDescription = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #0070f3;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;

  a {
    color: #aaa;
    transition: color 0.3s ease;

    &:hover {
      color: #0070f3;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 50%;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0070f3;
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #444;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #aaa;

  a {
    color: #0070f3;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;

const HeartIcon = styled(FaHeart)`
  color: #ff4757;
  margin: 0 0.3rem;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <FooterContainer>
        <FooterGrid>
          <FooterColumn>
            <FooterLogo>BOLD GO BEYOND</FooterLogo>
            <FooterDescription>
              혁신적인 디자인과 기술로 비즈니스의 새로운 가능성을 열어갑니다.
              우리는 고객의 성공을 위해 최선을 다합니다.
            </FooterDescription>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <FaFacebookF />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <a href="#about">About Us</a>
              </FooterLink>
              <FooterLink>
                <a href="#services">Services</a>
              </FooterLink>
              <FooterLink>
                <a href="#portfolio">Portfolio</a>
              </FooterLink>
              <FooterLink>
                <a href="#contact">Contact Us</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Services</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <a href="#">Web Design</a>
              </FooterLink>
              <FooterLink>
                <a href="#">App Development</a>
              </FooterLink>
              <FooterLink>
                <a href="#">E-commerce Solutions</a>
              </FooterLink>
              <FooterLink>
                <a href="#">Digital Marketing</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Contact Info</FooterTitle>
            <FooterLinks>
              <FooterLink>서울특별시 강남구 테헤란로 123, 5층</FooterLink>
              <FooterLink>+82 02-1234-5678</FooterLink>
              <FooterLink>info@boldgobeyond.com</FooterLink>
              <FooterLink>월-금: 9:00 AM - 6:00 PM</FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            &copy; {currentYear} BOLD GO BEYOND. All Rights Reserved. Made with{" "}
            <HeartIcon /> by <a href="#">Your Name</a>
          </Copyright>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
}
