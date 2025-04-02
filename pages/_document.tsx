import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>BOLD, 스튜디오 볼드 - for new design and branding. </title>
        <meta
          name="description"
          content="혁신적인 시각과 접근법으로 창의적인 솔루션을 이용한 대담한 브랜드 디자인"
        />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="BOLD, 스튜디오 볼드 - for new design and branding."
        />
        <meta property="og:url" content="https://boldgobynd.vercel.app/" />
        <meta
          property="og:description"
          content="혁신적인 시각과 접근법으로 창의적인 솔루션을 이용한 대담한 브랜드 디자인"
        />
        <meta property="og:image" content="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
