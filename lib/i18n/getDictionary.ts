import 'server-only';
import type { Locale } from './locales';

const dictionaries = {
  en: () => import('./dictionaries/en').then((m) => m.default),
  es: () => import('./dictionaries/es').then((m) => m.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)['en']>>;
