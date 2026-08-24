// Claude (Anthropic): substantially modified this file — Siddhavetha EY-style rebuild
import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { ConsumerWellnessComponent } from './pages/shop/consumer-wellness/consumer-wellness';
import { PersonalCareComponent } from './pages/shop/personal-care/personal-care';
import { SustainableLivingComponent } from './pages/shop/sustainable-living/sustainable-living';
import { TheScienceComponent } from './pages/institutions/The-Science/The-Science';
import { AgricultureComponent } from './pages/institutions/Agriculture/Agriculture';
import { PreventiveHealthcareComponent } from './pages/institutions/Preventive-Healthcare/Preventive-Healthcare';
import { DigitalComponent } from './pages/institutions/Digital/Digital';
import { RetreatsComponent } from './pages/experience/retreats/retreats.component';
import { TourismComponent } from './pages/experience/tourism/tourism.component';
import { PartnerInvestComponent } from './pages/company/partner-invest/partner-invest';
import { OurStoryComponent } from './pages/company/our-story/our-story';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { EventDetail } from './pages/events/event-detail/event-detail';
import { InitiativeDetail } from './pages/initiatives/initiative-detail';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'global-innovations',
    component: InitiativeDetail,
    data: {
      eyebrow: 'Siddhavetha Global Innovations',
      title: 'Validated wisdom. Global innovation.',
      description: 'A knowledge-driven enterprise transforming Asian wisdom into credible products, services, research and education for a global future.',
      image: 'assets/images/hero/siddhavetha-global-innovations.jpg',
      focus: [
        { title: 'Evidence and validation', text: 'Connecting traditional knowledge with modern research, testing and standards.' },
        { title: 'Responsible enterprise', text: 'Building commercially viable products and services with measurable social value.' },
        { title: 'Global distribution', text: 'Taking trusted Asian wisdom to institutions, partners and consumers worldwide.' }
      ]
    }
  },
  {
    path: 'global-wisdom-heritage-city',
    component: InitiativeDetail,
    data: {
      eyebrow: 'Global Wisdom Heritage City',
      title: 'A living destination for wisdom and progress.',
      description: 'A visionary 1,000-acre ecosystem bringing education, wellness, culture, innovation and green enterprise together in one global destination.',
      image: 'assets/images/hero/global-wisdom-heritage-city.jpg',
      focus: [
        { title: 'Living heritage', text: 'A contemporary home for knowledge traditions, culture and intergenerational learning.' },
        { title: 'Regenerative place', text: 'A self-sustaining ecosystem designed around biodiversity, wellness and circular systems.' },
        { title: 'Global exchange', text: 'A destination where researchers, learners, practitioners and communities collaborate.' }
      ]
    }
  },
  {
    path: 'global-capability-centre',
    component: InitiativeDetail,
    data: {
      eyebrow: 'SVGI Global Capability Centre (GCC)',
      title: 'Research capability with global reach.',
      description: 'A Coimbatore-headquartered hub transforming ancient wisdom into evidence-based products, technologies and sustainable solutions for the world.',
      image: 'assets/images/hero/siddhavetha-global-innovation-capability-centre.jpg',
      focus: [
        { title: 'Applied research', text: 'Advancing evidence, formulation science and translational research across disciplines.' },
        { title: 'Innovation services', text: 'Supporting partners with specialist capabilities from concept through validation.' },
        { title: 'Scalable solutions', text: 'Designing products and technologies that can create meaningful impact worldwide.' }
      ]
    }
  },
  {
    path: 'consumer-wellness',
    component: ConsumerWellnessComponent
  },
  {
    path: 'personal-care',
    component: PersonalCareComponent
  },
  {
    path: 'sustainable-living',
    component: SustainableLivingComponent
  },
  {
    path: 'The-Science',
    component: TheScienceComponent
  },
  {
    path: 'agriculture',
    component: AgricultureComponent
  },
  {
    path: 'preventive-healthcare',
    component: PreventiveHealthcareComponent
  },
  {
    path: 'digital',
    component: DigitalComponent
  },
  {
    path: 'retreats',
    component: RetreatsComponent
  },
  {
    path: 'tourism',
    component: TourismComponent
  },
  {
    path: 'partner-invest',
    component: PartnerInvestComponent
  },
  {
    path: 'our-story',
    component: OurStoryComponent
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'events/:id',
    component: EventDetail
  }
];
