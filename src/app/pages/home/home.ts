// Claude (Anthropic): substantially modified this file — Siddhavetha EY-style rebuild
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { PillarsCarouselComponent } from '../../components/pillars-carousel/pillars-carousel';
import { PromiseStripComponent } from '../../components/promise-strip/promise-strip';
import { EventsCarouselComponent } from '../../components/events-carousel/events-carousel';
import { EVENTS } from '../../data/events';

interface HeroSlide {
  text: string;
  image: string;
}

@Component({
  selector: 'app-home',
  imports: [PillarsCarouselComponent, PromiseStripComponent, EventsCarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  activeHeroIndex = signal(0);

  private heroTimer?: ReturnType<typeof setInterval>;
  private readonly heroIntervalMs = 6000;

  heroSlides: HeroSlide[] = [
    {
      text: 'Siddhavetha Global Innovations',
      image: 'assets/images/hero/siddhavetha-global-innovations.jpg'
    },
    {
      text: 'Global Wisdom Heritage City',
      image: 'assets/images/hero/global-wisdom-heritage-city.jpg'
    },
    {
      text: 'Siddhavetha Global Innovation Capability Centre (GCC)',
      image: 'assets/images/hero/siddhavetha-global-innovation-capability-centre.jpg'
    }
  ];

  events = EVENTS;

  promises: string[] = [
    '8 Integrated Pillars',
    '600-Acre Campus Envisaged',
    '5 Knowledge Pillars',
    '70+ Global Partners',
    'Net-Negative by Design',
    'Cruelty-Free, Always'
  ];

  ngOnInit(): void {
    this.heroTimer = setInterval(() => {
      this.activeHeroIndex.update(i => (i + 1) % this.heroSlides.length);
    }, this.heroIntervalMs);
  }

  ngOnDestroy(): void {
    if (this.heroTimer) clearInterval(this.heroTimer);
  }

  goToHeroSlide(index: number): void {
    this.activeHeroIndex.set(index);
  }
}
