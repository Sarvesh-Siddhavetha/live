// Claude (Anthropic): created this file — Siddhavetha EY-style rebuild
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventItem } from '../../data/events';

@Component({
  selector: 'app-events-carousel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './events-carousel.html',
  styleUrl: './events-carousel.css'
})
export class EventsCarouselComponent implements OnInit, OnDestroy {

  @Input() events: EventItem[] = [];
  @Input() intervalMs = 4000;

  @ViewChild('track') trackRef!: ElementRef<HTMLDivElement>;

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  private start(): void {
    if (this.events.length <= 1) return;
    this.timer = setInterval(() => this.step(1), this.intervalMs);
  }

  private stop(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  pause(): void {
    this.stop();
  }

  resume(): void {
    if (!this.timer) this.start();
  }

  next(): void {
    this.step(1);
  }

  prev(): void {
    this.step(-1);
  }

  private step(direction: 1 | -1): void {
    const el = this.trackRef?.nativeElement;
    if (!el) return;

    const card = el.querySelector<HTMLElement>('.event-card');
    if (!card) return;

    const gap = parseFloat(getComputedStyle(el).columnGap || '24');
    const cardWidth = card.offsetWidth + gap;
    const maxScroll = el.scrollWidth - el.clientWidth;

    const atEnd = el.scrollLeft >= maxScroll - 4;
    const atStart = el.scrollLeft <= 4;

    if (direction === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (direction === -1 && atStart) {
      el.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    }
  }
}
