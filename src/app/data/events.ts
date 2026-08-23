// Claude (Anthropic): created this file — Siddhavetha EY-style rebuild
export interface EventItem {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
  tag: string;
}

export const EVENTS: EventItem[] = [
  {
    id: 'campus-preview-day',
    image: 'assets/images/company/our-story-hero.png',
    title: 'Global Wisdom City — Campus Preview Day',
    description: 'Walk the master plan with our design team and see the first completed pavilions of the 600-acre campus.',
    date: '12 Sep 2026',
    tag: 'Campus'
  },
  {
    id: 'siddha-research-symposium',
    image: 'assets/images/company/our-story1.png',
    title: 'Siddha Research Symposium',
    description: 'Researchers and Siddha physicians present validated formulations and share early findings from the lab.',
    date: '26 Sep 2026',
    tag: 'Research'
  },
  {
    id: 'healing-retreat-opening',
    image: 'assets/images/experience/retreats-hero.jpeg',
    title: 'On-Campus Healing Retreat Opening',
    description: 'The first cohort of guests arrives for a multi-day Siddha medical retreat set across forest and farm.',
    date: '10 Oct 2026',
    tag: 'Wellness'
  },
  {
    id: 'sustainable-agriculture-field-day',
    image: 'assets/images/institutions/agriculture-hero.jpeg',
    title: 'Sustainable Agriculture Field Day',
    description: 'A hands-on walkthrough of manure-less, net-negative farming practices across the campus fields.',
    date: '24 Oct 2026',
    tag: 'Agriculture'
  },
  {
    id: 'gcc-showcase',
    image: 'assets/images/institutions/Science-hero.jpeg',
    title: 'Global Innovation Capability Centre Showcase',
    description: 'A first look inside the GCC laboratory — documentation, formulation and validation, explained.',
    date: '07 Nov 2026',
    tag: 'Research'
  },
  {
    id: 'partner-investor-day',
    image: 'assets/images/company/partner-hero.png',
    title: 'International Partner & Investor Day',
    description: 'Global partners and investors convene to review the roadmap across the eight pillars.',
    date: '21 Nov 2026',
    tag: 'Partnership'
  }
];
