import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://6cfdf0c186332a7bbcfb989b133800d6@o4509801848766464.ingest.de.sentry.io/4509801851519056",

  tracesSampleRate: 1.0,

  enableLogs: true,
  debug: false,
});
