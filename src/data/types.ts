export type Locale = "id" | "en";

export type NavItem = {
  label: string;
  href: string;
};

export type ExpertiseItem = {
  title: string;
  description: string;
  details: string[];
};

export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  image: string;
};

export type CaseStudyItem = {
  title: string;
  challenge: string;
  approach: string;
  solution: string;
  impact: string;
};

export type ProcessItem = {
  title: string;
  description: string;
};

export type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};
