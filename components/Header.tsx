import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import DropdownMenu, { DropdownMenuOptionProps } from "./common/DropdownMenu";
import FadeUpAnimation from "./common/FadeUpAnimation";

const NavContainer = styled.nav<{ scrolled: boolean; headerBgColor: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background-color: ${(props) =>
    props.scrolled || props.headerBgColor ? "white" : "transparent"};
  box-shadow: ${(props) =>
    props.scrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
`;

const LogoImage = styled(Image)<{ scrolled: boolean; headerColor?: boolean }>`
  height: auto;
  transition: all 0.3s ease;
  filter: ${(props) =>
    !props.scrolled && !props.headerColor
      ? "brightness(0) invert(1)" // 흰색으로 변환
      : "none"};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 990px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{
  scrolled: boolean;
  active: boolean;
  headerColor?: boolean;
}>`
  position: relative;
  color: ${(props) =>
    props.headerColor ? "#212121" : props.scrolled ? "#212121" : "white"};
  font-weight: bold;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${(props) => (props.active ? "100%" : "0")};
    height: 2px;
    background-color: ${(props) =>
      props.headerColor ? "#212121" : props.scrolled ? "#212121" : "white"};
    opacity: 0.5;
    transition: width 0.3s ease;
  }
  &:hover {
    opacity: 0.5;
  }
`;

const MobileMenuButton = styled.button<{
  scrolled: boolean;
  headerColor?: boolean;
}>`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${(props) =>
    props.headerColor ? "#212121" : props.scrolled ? "white" : "#212121"};
  cursor: pointer;

  @media (max-width: 990px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background-color: white;
  padding: 2rem;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileNavLink = styled.a`
  color: #333;
  font-weight: 500;
  font-size: 1.2rem;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  margin-bottom: 2rem;
`;

export const worksMenuOptions: DropdownMenuOptionProps[] = [
  { title: "ALL", subtitle: "전체" },
  { title: "BRANDING", subtitle: "브랜딩·로고" },
  { title: "PACKAGE", subtitle: "패키지" },
  { title: "AD·EDITORIAL", subtitle: "광고·편집" },
];

export default function Header({ headerColor = true, headerBgColor = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [worksMenuOpen, setWorksMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const targetRef = useRef<HTMLAnchorElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavContainer scrolled={scrolled} headerBgColor={headerBgColor}>
        <FadeUpAnimation reAnimate={false}>
          <NavContent>
            <Logo href="/">
              <LogoImage
                src="/favicon.ico"
                alt="BOLD GO BEYOND"
                scrolled={scrolled}
                headerColor={headerColor}
                width={150}
                height={40}
                priority
              />
            </Logo>
            <NavLinks>
              <NavLink
                href="/about"
                scrolled={scrolled}
                headerColor={headerColor}
                active={router.pathname === "/about"}
              >
                ABOUT
              </NavLink>
              <NavLink
                href="/works"
                scrolled={scrolled}
                headerColor={headerColor}
                active={router.pathname === "/works"}
                ref={targetRef}
                onMouseEnter={() => setWorksMenuOpen(true)}
              >
                WORKS
              </NavLink>
              <NavLink
                href="/contact"
                headerColor={headerColor}
                scrolled={scrolled}
                active={router.pathname === "/contact"}
              >
                CONTACT
              </NavLink>
            </NavLinks>
            <MobileMenuButton
              scrolled={scrolled}
              headerColor={headerColor}
              onClick={() => setMobileMenuOpen(true)}
            >
              ☰
            </MobileMenuButton>
          </NavContent>
        </FadeUpAnimation>
      </NavContainer>
      <DropdownMenu
        isOpened={worksMenuOpen}
        setIsOpened={setWorksMenuOpen}
        targetRef={targetRef}
        options={worksMenuOptions}
      />
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <CloseButton onClick={() => setMobileMenuOpen(false)}>✕</CloseButton>
          <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </MobileNavLink>
          <MobileNavLink
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </MobileNavLink>
        </MobileMenu>
      )}
    </>
  );
}
