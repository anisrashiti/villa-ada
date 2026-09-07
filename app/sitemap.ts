import type { MetadataRoute } from 'next';
import { property } from '@/src/config/property';
import { localePaths } from '@/src/i18n/dictionaries';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: new URL(localePaths.en, property.siteUrl).href,
    sq: new URL(localePaths.sq, property.siteUrl).href,
  };

  return [
    {
      url: languages.en,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: languages.sq,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages },
    },
  ];
}
