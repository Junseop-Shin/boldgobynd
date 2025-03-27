// pages/about.tsx
import React from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import FooterContact from "../components/FooterContact";

export default function AboutPage() {
  return (
    <Layout headerColor={false}>
      <About />
      <FooterContact />
    </Layout>
  );
}
