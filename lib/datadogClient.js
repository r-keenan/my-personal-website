import { datadogRum } from "@datadog/browser-rum";

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

datadogRum.startSessionReplayRecording();
