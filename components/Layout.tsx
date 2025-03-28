import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

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
    <>
      <Header headerColor={headerColor} headerBgColor={headerBgColor} />
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
}
