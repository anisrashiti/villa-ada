import type { Metadata, Viewport } from 'next';
import './globals.css';

const title = 'Villa Ada | Private Villa 25 Minutes from Prishtina';
const description =
  'Villa Ada is a private retreat 25 minutes from Prishtina for up to 10 guests, with a private swimming pool, hot tub, sauna and generous outdoor spaces.';

export const metadata: Metadata = {
  metadataBase: new URL('https://villa-ada-retreat.jocund-anole-9444.chatgpt.site'),
  title,
  description,
  alternates: { canonical: '/' },
  icons: { icon: '/branding/villa-ada-logo.jpg', apple: '/branding/villa-ada-logo.jpg' },
  openGraph: {
    title,
    description,
    type: 'website',
    url: '/',
    siteName: 'Villa Ada',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#173e25',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
