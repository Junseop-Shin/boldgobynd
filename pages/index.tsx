import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BoldAsYourPartnerSection from "../components/sections/BoldAsYourPartnerSection";
import BehindTheBrandSection from "../components/sections/BehindTheBrandSection";
import OurProcessSection from "../components/sections/OurProcessSection";
import WhyBoldSection from "../components/sections/WhyBoldSection";
import DesktopMainSection from "../components/sections/DesktopMainSection";
import MarqueeSection from "../components/sections/MarqueeSection";
import LetsTalkSection from "../components/sections/LetsTalkSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>BOLD — 브랜드 성장 파트너, 스튜디오 볼드</title>
      </Head>
      <Header headerColor headerBgColor={false} />
      <main>
        <Hero />
        {/* Mobile: 4개 섹션 순서대로 */}
        <BoldAsYourPartnerSection />
        <BehindTheBrandSection />
        <OurProcessSection />
        <WhyBoldSection />
        {/* Desktop: sticky-scroll 통합 */}
        <DesktopMainSection />
        {/* 공통: 마퀴(데스크톱), Let's Talk, Footer */}
        <MarqueeSection />
        <LetsTalkSection />
      </main>
      <Footer />
    </>
  );
}
