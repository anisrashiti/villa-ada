import type { Metadata, Viewport } from 'next';
import { property } from '@/src/config/property';
import './globals.css';

const title = 'Villa Ada | Private Villa 25 Minutes from Prishtina';
const description =
  'Villa Ada is a private retreat 25 minutes from Prishtina for up to 10 guests, with a private swimming pool, hot tub, sauna and generous outdoor spaces.';

export const metadata: Metadata = {
  metadataBase: new URL(property.siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  icons: { icon: property.logo, apple: property.logo },
  openGraph: {
    title,
    description,
    type: 'website',
    url: '/',
    siteName: 'Villa Ada',
  },
  robots: { index: true, follow: true },
  twitter: { card: 'summary', title, description },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#142f25',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
