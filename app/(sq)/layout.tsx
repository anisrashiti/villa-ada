import { SiteDocument } from '@/components/site-document';
import { createMetadata, viewport } from '@/src/i18n/metadata';
import '../globals.css';

export const metadata = createMetadata('sq');
export { viewport };

export default function AlbanianLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument locale="sq">{children}</SiteDocument>;
}
