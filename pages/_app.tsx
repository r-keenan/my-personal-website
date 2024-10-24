import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Header styleConditional={"opacity-90 bg-blur-sm"} router={router} />

      <div id="componentContainer">
        <Component {...pageProps} />
      </div>

      <Footer />
    </>
  );
}

export default MyApp;
