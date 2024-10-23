import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header styleConditional={"opacity-90 bg-blur-sm"} />

      <div id="componentContainer">
        <Component {...pageProps} />
      </div>

      <Footer />
    </>
  );
}

export default MyApp;
