import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

const Logo = styled.a<{ scrolled: boolean }>`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.scrolled ? "#333" : "white")};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a<{ scrolled: boolean }>`
  color: ${(props) => (props.scrolled ? "#333" : "white")};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #0070f3;
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Logo href="#" scrolled={scrolled}>
            BOLD GO BEYOND
          </Logo>
          <NavLinks>
            <NavLink href="#about" scrolled={scrolled}>
              About
            </NavLink>
            <NavLink href="#services" scrolled={scrolled}>
              Services
            </NavLink>
            <NavLink href="#portfolio" scrolled={scrolled}>
              Portfolio
            </NavLink>
            <NavLink href="#contact" scrolled={scrolled}>
              Contact
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
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
          >
            Portfolio
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
