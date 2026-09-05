import type { MetadataRoute } from 'next';
import { property } from '@/src/config/property';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: property.siteUrl, changeFrequency: 'monthly', priority: 1 }];
}
