import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import PageTracker from "@/components/PageTracker";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <PageTracker />
      <Component {...pageProps} />
    </>
  );
}
