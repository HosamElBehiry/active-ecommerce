import "swiper/css";
import "swiper/css/grid";
import "@/styles/globals.css";
import { Cairo } from "next/font/google";
import type { AppProps } from "next/app";
import { initialState, modalReducer } from "@/reducers/Modal.reducer";
import { useEffect, useReducer, createContext } from "react";
import { ModalProps } from "@/interfaces/Modal.interface";
import useTranslation from "next-translate/useTranslation";
import Layout from "@/components/Helpers/Layout";
import Modals from "@/components/Modals/Modals";

const font = Cairo({ weight: ["400", "300"], subsets: ["latin"] });
export const ModalContext = createContext<ModalProps | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const { lang } = useTranslation();
  const [state, dispatch] = useReducer(modalReducer, initialState);
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
      <ModalContext.Provider value={{ state, dispatch }}>
        <Layout>
          <Component {...pageProps} />
          <Modals />
        </Layout>
      </ModalContext.Provider>
    </main>
  );
}
