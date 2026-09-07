import { SiteDocument } from '@/components/site-document';
import { createMetadata, viewport } from '@/src/i18n/metadata';
import '../globals.css';

export const metadata = createMetadata('en');
export { viewport };

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
