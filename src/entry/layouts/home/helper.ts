import type { SupportedLocale, LocaleValue } from '@/types';
import { I18N_CONFIG } from '@/constants/config';

import type { HomeLocale } from './typing';

const locales: LocaleValue<HomeLocale> = {
  zh: {
    heading: I18N_CONFIG.zh.site.title,
    slogan: '让富阳银湖的创造者不再孤独',
    getStarted: '了解社区',
  },
};

function resolveLocale(locale: SupportedLocale): HomeLocale {
  return locales[locale];
}

export { resolveLocale };
