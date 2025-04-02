import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageAnimation from "./common/PageAnimation";
import Section from "./common/Section";
import FooterContact from "./FooterContact";

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  showFooterContact?: boolean;
  headerColor?: boolean;
  headerBgColor?: boolean;
  sectionBgColor?: string;
}

export default function Layout({
  children,
  showFooter = true,
  showFooterContact = false,
  headerColor = true,
  headerBgColor = false,
  sectionBgColor,
}: LayoutProps) {
  return (
    <PageAnimation>
      <Header headerColor={headerColor} headerBgColor={headerBgColor} />
      <main>
        <Section bgColor={sectionBgColor}>{children}</Section>
        {showFooterContact && (
          <Section bgColor="#d9ffe0">
            <FooterContact />
          </Section>
        )}
      </main>
      {showFooter && <Footer />}
    </PageAnimation>
  );
}
