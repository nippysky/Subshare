import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import ScrollUp from "../components/ScrollUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#BAFA3D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <ToastContainer theme="colored" />
      <ScrollUp />
      <Component {...pageProps} />
    </>
  );
}
