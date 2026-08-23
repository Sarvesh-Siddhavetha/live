// Claude (Anthropic): created this file — Siddhavetha EY-style rebuild
import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';

@Component({
  selector: 'app-contact',
  imports: [HeroComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  channels = [
    {
      title: 'General Enquiries',
      text: 'Questions about our pillars, products or the campus.',
      email: 'hello@siddhavetha.org'
    },
    {
      title: 'Partnerships & Investment',
      text: 'Licensing, distribution, research collaboration or investment.',
      email: 'partners@siddhavetha.org'
    },
    {
      title: 'Media & Press',
      text: 'Interview requests, brand assets and press enquiries.',
      email: 'press@siddhavetha.org'
    },
    {
      title: 'Campus & Retreat Visits',
      text: 'Plan a wellness retreat or an academic campus visit.',
      email: 'visit@siddhavetha.org'
    }
  ];
}
