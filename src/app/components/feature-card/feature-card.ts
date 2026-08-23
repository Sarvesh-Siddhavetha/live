import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css'
})
export class FeatureCardComponent {

  @Input() title = '';

  @Input() description = '';

  @Input() category = '';

  @Input() image = '';

  fallbackImage = 'assets/images/institutions/digital1.jpeg';

  handleImageError(event: Event): void {
    const target = event.target as HTMLImageElement | null;

    if (target) {
      target.src = this.fallbackImage;
    }
  }

}