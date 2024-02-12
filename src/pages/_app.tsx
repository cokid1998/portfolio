import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_KR } from "next/font/google";
import CurrentSectionProvider from "@/context/CurrentSectionProvider";

const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CurrentSectionProvider>
      <main className={noto_sans_kr.className}>
        <Component {...pageProps} />
      </main>
    </CurrentSectionProvider>
  );
}
