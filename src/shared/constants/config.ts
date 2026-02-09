// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { LocaleValue, LocaleConfig } from '../types';

const SITE_TITLE = '银湖创联';
const SITE_DESCRIPTION = '富阳银湖的去中心化在地社区，连接生活和工作在银湖的自由职业者、远程工作者、数字游民、探索副业的打工人等。';

const SITE_URL_MAP = {
  events: '/events',
  projects: '/projects',
  guides: '/guides',
  posts: '/posts',
  sponsor: '/sponsor',
  about: '/about',
  larkRepo: 'https://zcno80f2uu4b.feishu.cn/wiki/space/7537188932808359940',
  yinhuCommunitySpace: 'https://zcno80f2uu4b.feishu.cn/wiki/space/7575097612517280713',
  digitalYinhuApp: 'https://zcno80f2uu4b.feishu.cn/app/LmJBbUXsmaInOdsUfw0cRDtHnHb',
  digitalYinhuDoc: 'https://zcno80f2uu4b.feishu.cn/wiki/BtMawPJyhihv9zkLqWMchd7vnNg',
  contact: 'https://zcno80f2uu4b.feishu.cn/wiki/W2vkw09Sxi3g2ckF2uIcKRTynu3',
};

const I18N_DEFAULT_LOCALE = 'zh';

const I18N_CONFIG: LocaleValue<LocaleConfig> = {
  zh: {
    site: {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
    },
    navs: {
      events: '活动',
      projects: '项目',
      guides: '文档',
      posts: '博客',
      sponsor: '赞助',
      lark: '飞书知识库',
      about: '关于',
    },
  },
};

const OFFICIAL_WEBSITE_URL = 'https://yinhufreedom.com';

export {
  SITE_TITLE, SITE_DESCRIPTION, SITE_URL_MAP,
  I18N_DEFAULT_LOCALE, I18N_CONFIG,
  OFFICIAL_WEBSITE_URL,
};
