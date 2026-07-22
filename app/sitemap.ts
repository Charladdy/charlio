import type { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/lib/i18n/locales';

const BASE_URL = 'https://charl.io';

const pages: Array<{
  path: string;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
}> = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/our-approach', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/portfolio', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/jakes-cakes', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/cookies', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, changeFrequency, priority }) => {
    const languages = Object.fromEntries([
      ...locales.map((locale) => [locale, `${BASE_URL}/${locale}${path}`]),
      ['x-default', `${BASE_URL}/${defaultLocale}${path}`],
    ]);

    return locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      changeFrequency,
      priority,
      alternates: { languages },
    }));
  });
}
