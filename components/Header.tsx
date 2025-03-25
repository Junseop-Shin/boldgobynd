import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import DropdownMenu, { DropdownMenuOptionProps } from "./DropdownMenu";

const NavContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background-color: ${(props) => (props.scrolled ? "white" : "transparent")};
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

const Logo = styled(Link)<{ scrolled: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => (props.scrolled ? "white" : "#212121")};
  &:hover {
    opacity: 0.5;
  }
`;

const LogoImage = styled(Image)`
  height: auto;
  transition: opacity 0.3s ease;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ scrolled: boolean; active: boolean }>`
  color: #212121;
  font-weight: bold;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${(props) => (props.active ? "100%" : "0")};
    height: 2px;
    background-color: #212121;
    opacity: 0.5;
    transition: width 0.3s ease;
  }
  &:hover {
    opacity: 0.5;
  }
`;

const MobileMenuButton = styled.button<{ scrolled: boolean }>`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => (props.scrolled ? "#333" : "white")};
  cursor: pointer;

  @media (max-width: 768px) {
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

const WorksMenuOptions: DropdownMenuOptionProps[] = [
  { title: "ALL", subtitle: "전체", address: "" },
  { title: "BRANDING", subtitle: "브랜딩·로고", address: "/#branding" },
  { title: "PACKAGE", subtitle: "패키지", address: "/#package" },
  { title: "AD·EDITORIAL", subtitle: "광고·편집", address: "/#ad" },
];

export default function Header() {
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
      <NavContainer scrolled={scrolled}>
        <NavContent>
          <Logo href="/" scrolled={scrolled}>
            <LogoImage
              src="/favicon.ico"
              alt="BOLD GO BEYOND"
              width={150}
              height={40}
              priority
            />
          </Logo>
          <NavLinks>
            <NavLink
              href="/about"
              scrolled={scrolled}
              active={router.pathname === "/about"}
            >
              ABOUT
            </NavLink>
            <NavLink
              href="/works"
              scrolled={scrolled}
              active={router.pathname === "/works"}
              ref={targetRef}
              onMouseEnter={() => setWorksMenuOpen(true)}
            >
              WORKS
            </NavLink>
            <NavLink
              href="/contact"
              scrolled={scrolled}
              active={router.pathname === "/contact"}
            >
              CONTACT
            </NavLink>
          </NavLinks>
          <MobileMenuButton
            scrolled={scrolled}
            onClick={() => setMobileMenuOpen(true)}
          >
            ☰
          </MobileMenuButton>
        </NavContent>
      </NavContainer>
      {worksMenuOpen && (
        <DropdownMenu
          isOpened={worksMenuOpen}
          setIsOpened={setWorksMenuOpen}
          targetRef={targetRef}
          options={WorksMenuOptions}
        />
      )}
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <CloseButton onClick={() => setMobileMenuOpen(false)}>✕</CloseButton>
          <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </MobileNavLink>
          <MobileNavLink
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </MobileNavLink>
        </MobileMenu>
      )}
    </>
  );
}
