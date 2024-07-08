import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

export function VercelAnalitics() {
  return (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
