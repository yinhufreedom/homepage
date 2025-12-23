import type { SupportedLocale, LocaleValue } from '@/types';
import { I18N_CONFIG } from '@/constants/config';

import type { HomeLocale } from './typing';

const locales: LocaleValue<HomeLocale> = {
  zh: {
    heading: I18N_CONFIG.zh.site.title,
    slogan: '让富阳银湖的创造者与自游民不再孤独',
    getStarted: '了解社区',
    highlights: '核心价值',
    social: {
      title: '家门口的社交场',
      description: '在富阳银湖举办各类活动，让自由职业者、小微创业者等可在家门口找到同类人或跨领域交流。',
    },
    experiment: {
      title: '创造者的试验场',
      description: '让有想法、敢行动的人有了在「附近」的人面前发挥自己才能并展示自我的舞台。',
    },
    freedom: {
      title: '自游民的助推器',
      description: '让未觉醒者通过引导将自己喜欢、擅长的事变为个人事业，令已觉醒者借助社区使个人事业发展得更好。',
    },
  },
};

function resolveLocale(locale: SupportedLocale): HomeLocale {
  return locales[locale];
}

export { resolveLocale };
