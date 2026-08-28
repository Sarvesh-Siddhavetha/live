// Claude (Anthropic): created this file — Siddhavetha EY-style rebuild
import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Pillar {
  index: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-pillars-carousel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pillars-carousel.html',
  styleUrl: './pillars-carousel.css'
})
export class PillarsCarouselComponent {

  @ViewChild('track') trackRef!: ElementRef<HTMLDivElement>;

  activeIndex = signal(0);

  pillars: Pillar[] = [
    {
      index: '01',
      title: 'Green Amazon Marketplace',
      description: 'A curated global marketplace connecting authentic Siddha and natural products with conscious consumers worldwide.',
      image: 'assets/images/pillar-photos/01-green-amazon-marketplace.png',
      link: '/consumer-wellness'
    },
    {
      index: '02',
      title: 'Consumer Products',
      description: 'Branded native product lines — supplements, tonics and holistic nutrition — grown and formulated on our own certified campus.',
      image: 'assets/images/pillar-photos/02-consumer-products.png',
      link: '/personal-care'
    },
    {
      index: '03',
      title: 'Global Certification & Quality Assurance',
      description: 'Proprietary sustainability and quality certification that gives small producers and MSMEs a path to international export standards.',
      image: 'assets/images/pillar-photos/03-global-certification-quality-assurance.png',
      link: '/The-Science'
    },
    {
      index: '04',
      title: 'Global Research & Innovation Centre',
      description: 'Documentation, formulation, testing and validation — the laboratory that turns community knowledge into citable, compliant science.',
      image: 'assets/images/pillar-photos/04-global-research-innovation-centre.png',
      link: '/The-Science'
    },
    {
      index: '05',
      title: 'Wellness Tourism',
      description: 'On-campus Siddha healing retreats and conscious-living immersive experiences for domestic and international visitors.',
      image: 'assets/images/pillar-photos/05-wellness-tourism.png',
      link: '/tourism'
    },
    {
      index: '06',
      title: 'Sustainable Agriculture & Green Economy',
      description: 'Manure-less, net-negative organic farming that regenerates soil while supplying our own product and research pipelines.',
      image: 'assets/images/pillar-photos/06-sustainable-agriculture-green-economy.png',
      link: '/agriculture'
    },
    {
      index: '07',
      title: 'Global Education & Knowledge Network',
      description: 'International and domestic degree, dual-degree and executive certification programmes across five knowledge pillars.',
      image: 'assets/images/pillar-photos/07-global-education-knowledge-network.png',
      link: '/digital'
    },
    {
      index: '08',
      title: 'Consulting & Innovation',
      description: 'A global capability centre turning indigenous knowledge into rigorous research, publication-ready evidence and scalable education programs.',
      image: 'assets/images/pillar-photos/08-innovation-consulting-social-innovation.png',
      link: '/consulting-innovation'
    }
  ];

  private step(direction: 1 | -1): void {
    const el = this.trackRef.nativeElement;
    const card = el.querySelector<HTMLElement>('.pillar-card');
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

    const visiblePerView = Math.max(1, Math.round(el.clientWidth / cardWidth));
    this.activeIndex.update(i => {
      const next = i + direction;
      const max = this.pillars.length - visiblePerView;
      if (next < 0) return max < 0 ? 0 : max;
      if (next > max) return 0;
      return next;
    });
  }

  next(): void {
    this.step(1);
  }

  prev(): void {
    this.step(-1);
  }
}
