// pages/index.tsx
import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Layout showFooter={false}>
      <Hero />
    </Layout>
  );
}
