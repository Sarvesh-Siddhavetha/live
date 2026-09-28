// Claude (Anthropic): substantially modified this file — Siddhavetha EY-style rebuild
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PillarsCarouselComponent } from '../../components/pillars-carousel/pillars-carousel';
import { EventsCarouselComponent } from '../../components/events-carousel/events-carousel';
import { EVENTS } from '../../data/events';

interface HeroSlide {
  titleLines: string[];
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, PillarsCarouselComponent, EventsCarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  activeHeroIndex = signal(0);
  isPaused = signal(false);

  private heroTimer?: ReturnType<typeof setInterval>;
  private readonly heroIntervalMs = 6000;
  private reduceMotion = false;
  private hovering = false;

  heroSlides: HeroSlide[] = [
    {
      titleLines: ['Siddhavetha Global', 'Innovations'],
      description: 'A knowledge-driven innovation enterprise established to transform validated Asian wisdom — Siddha, Ayurveda, natural agriculture and traditional sciences — into scientifically credible, commercially viable, and globally distributed products, services, research and education.',
      image: 'assets/images/hero/siddhavetha-global-innovations.jpg',
      link: '/global-innovations'
    },
    {
      titleLines: ['Global Wisdom', 'Heritage City'],
      description: 'A visionary 1,000-acre, self-sustaining ecosystem that brings together ancient wisdom, modern science, education, wellness, culture, innovation and green enterprise in one global destination.',
      image: 'assets/images/hero/global-wisdom-heritage-city.jpg',
      link: '/global-wisdom-heritage-city'
    },
    {
      titleLines: ['SVGI Global Capability', 'Centre (GCC)'],
      description: 'A global innovation and research hub headquartered in Coimbatore, transforming ancient wisdom into evidence-based products, technologies and sustainable solutions for the world.',
      image: 'assets/images/hero/siddhavetha-global-innovation-capability-centre.jpg',
      link: '/global-capability-centre'
    }
  ];

  events = EVENTS;

  ngOnInit(): void {
    this.reduceMotion = typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (this.reduceMotion) {
      this.isPaused.set(true);
    }
    this.syncAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  goToHeroSlide(index: number): void {
    this.activeHeroIndex.set(index);
  }

  onHeroEnter(): void {
    this.hovering = true;
    this.syncAutoplay();
  }

  onHeroLeave(): void {
    this.hovering = false;
    this.syncAutoplay();
  }

  togglePause(): void {
    this.isPaused.update(v => !v);
    this.syncAutoplay();
  }

  private syncAutoplay(): void {
    const shouldPlay = !this.reduceMotion && !this.isPaused() && !this.hovering;
    if (shouldPlay) {
      this.startAutoplay();
    } else {
      this.stopAutoplay();
    }
  }

  private startAutoplay(): void {
    this.stopAutoplay();
    this.heroTimer = setInterval(() => {
      this.activeHeroIndex.update(i => (i + 1) % this.heroSlides.length);
    }, this.heroIntervalMs);
  }

  private stopAutoplay(): void {
    if (this.heroTimer) {
      clearInterval(this.heroTimer);
      this.heroTimer = undefined;
    }
  }
}
