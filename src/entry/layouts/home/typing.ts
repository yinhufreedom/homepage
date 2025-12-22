type BriefItem = {
  title: string;
  description: string;
};

type HomeLocale = {
  heading: string;
  slogan: string;
  getStarted: string;
  highlights: string;
  social: BriefItem;
  experiment: BriefItem;
  freedom: BriefItem,
}

export type { HomeLocale };
