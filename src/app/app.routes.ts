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