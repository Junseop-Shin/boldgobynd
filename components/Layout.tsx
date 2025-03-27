import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  headerColor?: boolean;
}

export default function Layout({
  children,
  showFooter = true,
  headerColor = true,
}: LayoutProps) {
  return (
    <>
      <Header headerColor={headerColor} />
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
}
