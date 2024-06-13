import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
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
