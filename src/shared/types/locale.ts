type SupportedLocale = 'zh';

type LocaleValue<T> = Record<SupportedLocale, T>;

type SiteConfig = {
  title: string;
  description: string;
};

type NavConfig = {
  events: string;
  projects: string;
  guides: string;
  posts: string;
  sponsor: string;
  about: string;
  lark: string;
};

type LocaleConfig = {
  site: SiteConfig;
  navs: NavConfig;
};

type NavKey = keyof NavConfig;

export type { SupportedLocale, LocaleValue, LocaleConfig, NavKey };
