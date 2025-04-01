import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageAnimation from "./common/PageAnimation";

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  headerColor?: boolean;
  headerBgColor?: boolean;
}

export default function Layout({
  children,
  showFooter = true,
  headerColor = true,
  headerBgColor = false,
}: LayoutProps) {
  return (
    <PageAnimation>
      <Header headerColor={headerColor} headerBgColor={headerBgColor} />
      <main>{children}</main>
      {showFooter && <Footer />}
    </PageAnimation>
  );
}
