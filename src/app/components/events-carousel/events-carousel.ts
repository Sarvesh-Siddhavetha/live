// Claude (Anthropic): created this file — Siddhavetha EY-style rebuild
import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { EventItem } from '../../data/events';

@Component({
  selector: 'app-events-carousel',
  standalone: true,
  imports: [],
  templateUrl: './events-carousel.html',
  styleUrl: './events-carousel.css'
})
export class EventsCarouselComponent implements OnInit, OnDestroy {

  @Input() events: EventItem[] = [];
  @Input() intervalMs = 4000;

  @ViewChild('track') trackRef!: ElementRef<HTMLDivElement>;

  selectedEvent = signal<EventItem | null>(null);
  modalSlideIndex = signal(0);

  private timer?: ReturnType<typeof setInterval>;
  private modalTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.stop();
    this.stopModalSlideshow();
    document.body.style.overflow = '';
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
    if (!this.timer && !this.selectedEvent()) this.start();
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

  openEvent(event: EventItem): void {
    this.stop();
    this.selectedEvent.set(event);
    this.modalSlideIndex.set(0);
    document.body.style.overflow = 'hidden';
    this.startModalSlideshow();
  }

  closeEvent(): void {
    this.stopModalSlideshow();
    this.selectedEvent.set(null);
    this.modalSlideIndex.set(0);
    document.body.style.overflow = '';
    this.start();
  }

  nextPhoto(): void {
    this.advancePhoto(1);
  }

  prevPhoto(): void {
    this.advancePhoto(-1);
  }

  goToPhoto(index: number): void {
    this.modalSlideIndex.set(index);
    this.restartModalSlideshow();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedEvent()) this.closeEvent();
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight(): void {
    if (this.selectedEvent()) this.nextPhoto();
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft(): void {
    if (this.selectedEvent()) this.prevPhoto();
  }

  private advancePhoto(direction: 1 | -1, restart = true): void {
    const event = this.selectedEvent();
    if (!event?.gallery.length) return;

    this.modalSlideIndex.update(index => (index + direction + event.gallery.length) % event.gallery.length);
    if (restart) this.restartModalSlideshow();
  }

  private startModalSlideshow(): void {
    const event = this.selectedEvent();
    if (!event || event.gallery.length <= 1) return;

    this.modalTimer = setInterval(() => this.advancePhoto(1, false), 4500);
  }

  private stopModalSlideshow(): void {
    if (this.modalTimer) {
      clearInterval(this.modalTimer);
      this.modalTimer = undefined;
    }
  }

  private restartModalSlideshow(): void {
    this.stopModalSlideshow();
    this.startModalSlideshow();
  }
}
