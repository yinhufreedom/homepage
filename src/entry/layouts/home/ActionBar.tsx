import clsx from 'clsx';

import { Button, Link } from '@/components/react';
import { ArrowRight } from '@/components/icon';

import type { HomeLocale } from './typing';

type ActionBarProps = {
  className?: string;
  locale: HomeLocale;
};

function ActionBar({ className, locale }: ActionBarProps) {
  return (
    <div className={clsx('flex flex-col sm:flex-row gap-4 w-full sm:w-auto', className)}>
      <Button
        as={Link}
        href="https://zcno80f2uu4b.feishu.cn/wiki/Qou1w6TmFiKIuGkcM2ZcM0Qlnnh"
        isExternal
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
