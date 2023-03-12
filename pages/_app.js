import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { datadogRum } from "@datadog/browser-rum";
import { datadogLogs } from "@datadog/browser-logs";

datadogRum.init({
  applicationId: process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID,
  clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
  site: process.env.NEXT_PUBLIC_DATADOG_SITE,
  service: process.env.NEXT_PUBLIC_DATADOG_SERVICE,
  env: process.env.NEXT_PUBLIC_DATADOG_ENV,
  // Specify a version number to identify the deployed version of your application in Datadog
  version: "1.0.0",
  sessionSampleRate: 100,
  premiumSampleRate: 100,
  trackUserInteractions: true,
  defaultPrivacyLevel: "mask-user-input",
});

datadogLogs.init({
  clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
  site: process.env.NEXT_PUBLIC_DATADOG_SITE,
  forwardErrorsToLogs: true,
  sessionSampleRate: 100,
});

datadogRum.startSessionReplayRecording();

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
