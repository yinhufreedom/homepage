// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { LocaleValue, LocaleConfig } from '../types';

const SITE_TITLE = '银湖创联';
const SITE_DESCRIPTION = '富阳银湖的去中心化在地社区，连接生活和工作在银湖的自由职业者、远程工作者、数字游民、探索副业的打工人等。';

const I18N_DEFAULT_LOCALE = 'zh';

const I18N_CONFIG: LocaleValue<LocaleConfig> = {
  zh: {
    site: {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
    },
    navs: {
      guides: '文档',
      posts: '博客',
    },
  },
};

const OFFICIAL_WEBSITE_URL = 'https://yinhufreedom.com';

export {
  SITE_TITLE, SITE_DESCRIPTION,
  I18N_DEFAULT_LOCALE, I18N_CONFIG,
  OFFICIAL_WEBSITE_URL,
};
