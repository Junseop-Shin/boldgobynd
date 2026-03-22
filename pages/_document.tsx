import { Html, Head, Main, NextScript } from "next/document";

const SITE_URL = "https://boldgobynd.vercel.app";
const OG_IMAGE = `${SITE_URL}/resources/main/Main_Title.webp`;
const TITLE = "BOLD — 브랜드 성장 파트너, 스튜디오 볼드";
const DESCRIPTION =
  "전략부터 실행까지 한 흐름으로. 감이 아니라 근거로 설계하는 브랜드 파트너, 스튜디오 볼드.";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="description" content={DESCRIPTION} />
        <meta name="robots" content="noindex,nofollow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Studio BOLD" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Studio BOLD — Think Bold, Create Beyond" />
        <meta property="og:locale" content="ko_KR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
