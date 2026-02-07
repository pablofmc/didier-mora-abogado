"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
  const pathname = usePathname();
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!gaId || typeof window.gtag !== "function") {
      return;
    }

    if (!hasInitialized.current) {
      hasInitialized.current = true;
      return;
    }

    window.gtag("config", gaId, {
      page_path: pathname
    });
  }, [pathname]);

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
gtag('js', new Date());
gtag('config', '${gaId}', { page_path: window.location.pathname });
          `.trim()
        }}
      />
    </>
  );
}
