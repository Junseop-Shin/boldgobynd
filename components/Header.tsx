import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import DropdownMenu from "./common/DropdownMenu";
import { MOBILE_BREAKPOINT, worksMenuOptions } from "../assets/common";
import { IoIosSearch } from "react-icons/io";
import MobileNavMenu from "./common/MobileNavMenu";

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

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 0.3rem 0.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
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
  filter: ${(props) =>
    !props.scrolled && !props.headerColor
      ? "brightness(0) invert(1)" // 흰색으로 변환
      : "none"};

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 30px;
    width: auto;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
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
    !props.scrolled && !props.headerColor ? "white" : "#212121"};
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: block;
  }
`;

const MobileSearchButton = styled(IoIosSearch)<{
  scrolled: boolean;
  headerColor?: boolean;
}>`
  display: none;
  background: none;
  border: none;
  filter: ${(props) =>
    !props.scrolled && !props.headerColor
      ? "brightness(0) invert(1)" // 흰색으로 변환
      : "none"};
  cursor: not-allowed;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: block;
  }
`;

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

    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavContainer scrolled={scrolled} headerBgColor={headerBgColor}>
        <NavContent>
          <MobileMenuButton
            scrolled={scrolled}
            headerColor={headerColor}
            onClick={() => setMobileMenuOpen(true)}
          >
            ☰
          </MobileMenuButton>
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
          <MobileSearchButton
            headerColor={headerColor}
            scrolled={scrolled}
            aria-disabled
          />
        </NavContent>
      </NavContainer>
      <DropdownMenu
        isOpened={worksMenuOpen}
        setIsOpened={setWorksMenuOpen}
        targetRef={targetRef}
        options={worksMenuOptions}
      />
      <MobileNavMenu
        isOpened={mobileMenuOpen}
        setIsOpened={setMobileMenuOpen}
      />
    </>
  );
}
