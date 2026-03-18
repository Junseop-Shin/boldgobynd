import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio BOLD — 브랜드의 가능성을 깨우는 파트너",
  description:
    "볼드는 브랜드의 핵심을 함께 정의하고, 그 매력을 고객에게 선명하게 전하는 방법을 만듭니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${cormorant.variable} ${notoSansKR.variable}`}>
      <body>{children}</body>
    </html>
  );
}
