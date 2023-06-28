import "swiper/css";
import "swiper/css/grid";
import "@/styles/globals.css";
import { Cairo } from "next/font/google";
import Layout from "@/components/Helpers/Layout";
import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";
import type { AppProps } from "next/app";
const font = Cairo({ weight: ["400", "300"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const { lang } = useTranslation();
  useEffect(() => {
    window.onresize = () => {
      const windowSize = window.devicePixelRatio;
      if (windowSize < 1) {
        document.body.style.width = windowSize * 100 + "%";
        document.body.style.margin = "auto";
      } else {
        document.body.style.width = "100%";
        document.body.style.margin = "auto";
      }
    };
  });
  useEffect(() => {
    document.body.style.direction = lang === "en" ? "ltr" : "rtl";
  }, [lang]);
  return (
    <main className={font.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
