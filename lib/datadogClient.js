import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: NEXT_PUBLIC_DATADOG_APPLICATION_ID,
  clientToken: NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
  site: NEXT_PUBLIC_DATADOG_SITE,
  service: NEXT_PUBLIC_DATADOG_SERVICE,

  // Specify a version number to identify the deployed version of your application in Datadog
  version: "1.0.0",
  sessionSampleRate: 100,
  premiumSampleRate: 100,
  trackUserInteractions: true,
  defaultPrivacyLevel: "mask-user-input",
});

datadogRum.startSessionReplayRecording();
