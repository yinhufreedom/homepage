import clsx from 'clsx';
import { getRelativeLocaleUrl } from 'astro:i18n';

import { SITE_URL_MAP } from '@/constants/config';
import { getCurrentLocale } from '@/utils';
import { Button, Link } from '@/components/react';
import { ArrowRight } from '@/components/icon';

import type { HomeLocale } from './typing';

type ActionBarProps = {
  className?: string;
  locale: HomeLocale;
};

function ActionBar({ className, locale }: ActionBarProps) {
  const getLocaleUrl = getRelativeLocaleUrl.bind(null, getCurrentLocale());

  return (
    <div className={clsx('flex flex-col sm:flex-row gap-4 w-full sm:w-auto', className)}>
      <Button
        as={Link}
        href={getLocaleUrl(SITE_URL_MAP.about)}
        size="lg"
        color="primary"
        variant="solid"
        endContent={<ArrowRight className="size-5" />}
      >
        {locale.getStarted}
      </Button>
    </div>
  );
}

export default ActionBar;
