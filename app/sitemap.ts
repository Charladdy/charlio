import type { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/lib/i18n/locales';
import { sanityFetch } from '@/lib/sanity/fetch';
import { POST_SLUGS_QUERY } from '@/lib/sanity/queries';

const BASE_URL = 'https://www.charl.io';

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
  { path: '/jakes-bistro/menus', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/jakes-bistro/menus/drinks', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/jakes-bistro/menus/main/lunch', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/jakes-bistro/menus/main/dinner', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/jakes-bistro/menus/main/brunch', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/jakes-bistro/menus/downtown/lunch', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/jakes-bistro/menus/downtown/dinner', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/cookies', changeFrequency: 'yearly', priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const localizedEntries = pages.flatMap(({ path, changeFrequency, priority }) => {
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

  // Journal posts are Sanity-authored and English-only (no locale variants),
  // so unlike the pages above they're fetched rather than hand-maintained.
  const postSlugs = await sanityFetch<{ slug: string }[]>({
    query: POST_SLUGS_QUERY,
    tags: ['post'],
  });

  const journalEntries: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/journal`, changeFrequency: 'weekly', priority: 0.6 },
    ...postSlugs.map(({ slug }) => ({
      url: `${BASE_URL}/journal/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];

  return [...localizedEntries, ...journalEntries];
}
