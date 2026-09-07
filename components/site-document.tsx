import type { Locale } from '@/src/i18n/dictionaries';

/* oxlint-disable next/no-head-element -- Multiple App Router root layouts use a shared document component with framework-supported head markup. */

export function SiteDocument({
  children,
  locale,
}: Readonly<{ children: React.ReactNode; locale: Locale }>) {
  return (
    <html lang={locale}>
      <head>
        <link
          rel="preload"
          href="/fonts/cormorant-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/cormorant-italic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/manrope-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
/* oxlint-enable next/no-head-element */
