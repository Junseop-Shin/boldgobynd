import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>BOLD - 브랜드 성장 파트너, 스튜디오 볼드</title>
        <meta
          name="description"
          content="혁신적인 시각과 접근법으로 창의적인 솔루션을 이용한 대담한 브랜드 디자인"
        />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="BOLD - 브랜드 성장 파트너, 스튜디오 볼드"
        />
        <meta property="og:url" content="https://boldgobynd.vercel.app/" />
        <meta
          property="og:description"
          content="혁신적인 시각과 접근법으로 창의적인 솔루션을 이용한 대담한 브랜드 디자인"
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
