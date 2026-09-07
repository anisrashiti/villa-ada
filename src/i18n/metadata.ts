import type { Metadata, Viewport } from 'next';
import { property } from '@/src/config/property';
import { dictionaries, localePaths, type Locale } from './dictionaries';

export function createMetadata(locale: Locale): Metadata {
  const copy = dictionaries[locale].metadata;
  const canonical = localePaths[locale];

  return {
    metadataBase: new URL(property.siteUrl),
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical,
      languages: {
        en: localePaths.en,
        sq: localePaths.sq,
        'x-default': localePaths.en,
      },
    },
    icons: { icon: property.logo, apple: property.logo },
    openGraph: {
      title: copy.title,
      description: copy.description,
      type: 'website',
      url: canonical,
      siteName: property.name,
      locale: copy.openGraphLocale,
      alternateLocale:
        locale === 'en'
          ? [dictionaries.sq.metadata.openGraphLocale]
          : [dictionaries.en.metadata.openGraphLocale],
    },
    robots: { index: true, follow: true },
    twitter: {
      card: 'summary',
      title: copy.title,
      description: copy.description,
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#142f25',
};
