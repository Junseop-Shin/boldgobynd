import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Works from "../../components/Works";

export default function WorksPage() {
  return (
    <>
      <Head>
        <title>Works — Studio BOLD</title>
        <meta
          property="og:title"
          content="Works — Studio BOLD"
        />
        <meta
          property="og:description"
          content="볼드가 함께 만든 브랜드의 여정. 전략, 비주얼 아이덴티티, 패키지, 광고 편집까지."
        />
        <meta property="og:url" content="https://boldgobynd.vercel.app/works" />
      </Head>
      <Layout headerBgColor>
        <Works />
      </Layout>
    </>
  );
}
