// Claude (Anthropic): created this file — Siddhavetha EY-style rebuild
export interface EventItem {
  id: string;
  image: string;
  gallery: EventSlide[];
  title: string;
  description: string;
  date: string;
  tag: string;
}

export interface EventSlide {
  image: string;
  title: string;
  description: string;
}

export const EVENTS: EventItem[] = [
  {
    id: 'campus-preview-day',
    image: 'assets/images/company/our-story-hero.png',
    gallery: [
      { image: 'assets/images/company/our-story-hero.png', title: 'A first view of the living campus', description: 'Guests walk through the connected landscape planned for learning, healing, culture and responsible enterprise.' },
      { image: 'assets/images/hero/global-wisdom-heritage-city.jpg', title: 'Wisdom translated into place', description: 'The master plan brings contemporary facilities together with the ecological character of the site.' },
      { image: 'assets/images/company/company1.png', title: 'Designed for shared discovery', description: 'Preview conversations explore how institutions, practitioners and communities will use the campus.' }
    ],
    title: 'Global Wisdom City — Campus Preview Day',
    description: 'Walk the master plan with our design team and see the first completed pavilions of the 600-acre campus.',
    date: '12 Sep 2026',
    tag: 'Campus'
  },
  {
    id: 'siddha-research-symposium',
    image: 'assets/images/company/our-story1.png',
    gallery: [
      { image: 'assets/images/company/our-story1.png', title: 'Knowledge in conversation', description: 'Researchers and Siddha physicians share methods, observations and emerging evidence across disciplines.' },
      { image: 'assets/images/institutions/Science-hero.jpeg', title: 'From traditional insight to validation', description: 'Sessions connect documented wisdom with modern laboratory practice and transparent research protocols.' },
      { image: 'assets/images/institutions/Science1.png', title: 'Collaborative research sessions', description: 'Small-group discussions examine formulation science, quality benchmarks and pathways to publication.' }
    ],
    title: 'Siddha Research Symposium',
    description: 'Researchers and Siddha physicians present validated formulations and share early findings from the lab.',
    date: '26 Sep 2026',
    tag: 'Research'
  },
  {
    id: 'healing-retreat-opening',
    image: 'assets/images/experience/retreats-hero.jpeg',
    gallery: [
      { image: 'assets/images/experience/retreats-hero.jpeg', title: 'Arrival into a restorative landscape', description: 'The first guests enter a retreat environment shaped around quiet, nature and attentive Siddha care.' },
      { image: 'assets/images/experience/retreats1.jpeg', title: 'Personalised wellness journeys', description: 'Each stay combines consultation, daily rhythm, therapeutic practice and nourishing food.' },
      { image: 'assets/images/experience/retreats2.jpeg', title: 'Healing connected to nature', description: 'Forest paths, gardens and calm interiors support rest between guided treatments and learning.' }
    ],
    title: 'On-Campus Healing Retreat Opening',
    description: 'The first cohort of guests arrives for a multi-day Siddha medical retreat set across forest and farm.',
    date: '10 Oct 2026',
    tag: 'Wellness'
  },
  {
    id: 'sustainable-agriculture-field-day',
    image: 'assets/images/institutions/agriculture-hero.jpeg',
    gallery: [
      { image: 'assets/images/institutions/agriculture-hero.jpeg', title: 'A field-scale view of regeneration', description: 'Visitors see how soil, water, biodiversity and crop planning are managed as one living system.' },
      { image: 'assets/images/institutions/agricultue1.png', title: 'Learning directly from the land', description: 'Field demonstrations explain manure-less methods, botanical inputs and practical soil stewardship.' },
      { image: 'assets/images/institutions/agricultue2.png', title: 'Knowledge for growers and partners', description: 'The programme translates campus practice into methods that farming communities can evaluate and adopt.' }
    ],
    title: 'Sustainable Agriculture Field Day',
    description: 'A hands-on walkthrough of manure-less, net-negative farming practices across the campus fields.',
    date: '24 Oct 2026',
    tag: 'Agriculture'
  },
  {
    id: 'gcc-showcase',
    image: 'assets/images/institutions/Science-hero.jpeg',
    gallery: [
      { image: 'assets/images/institutions/Science-hero.jpeg', title: 'Inside the innovation capability centre', description: 'The showcase follows ideas from documented knowledge through formulation, testing and validation.' },
      { image: 'assets/images/institutions/Science1.png', title: 'Evidence built with discipline', description: 'Specialists demonstrate laboratory workflows designed for credible, repeatable product development.' },
      { image: 'assets/images/institutions/Science2.png', title: 'Capability designed for global partners', description: 'Visitors explore how the centre can support research programmes, standards and commercial translation.' }
    ],
    title: 'Global Innovation Capability Centre Showcase',
    description: 'A first look inside the GCC laboratory — documentation, formulation and validation, explained.',
    date: '07 Nov 2026',
    tag: 'Research'
  },
  {
    id: 'partner-investor-day',
    image: 'assets/images/company/partner-hero.png',
    gallery: [
      { image: 'assets/images/company/partner-hero.png', title: 'A shared view of the roadmap', description: 'Partners and investors review how the eight pillars combine into one connected innovation ecosystem.' },
      { image: 'assets/images/company/company3.png', title: 'Partnerships built around capability', description: 'Working sessions identify opportunities across research, products, education and market access.' },
      { image: 'assets/images/company/company4.png', title: 'From alignment to action', description: 'Focused discussions establish practical next steps, programme ownership and long-term value creation.' }
    ],
    title: 'International Partner & Investor Day',
    description: 'Global partners and investors convene to review the roadmap across the eight pillars.',
    date: '21 Nov 2026',
    tag: 'Partnership'
  }
];
