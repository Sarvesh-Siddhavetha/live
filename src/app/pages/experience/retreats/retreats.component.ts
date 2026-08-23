import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/hero/hero';
import { ChipsComponent } from '../../../components/chips/chips';
import { ProductCardComponent } from '../../../components/product-card/product-card';
import { FeatureCardComponent } from '../../../components/feature-card/feature-card';

@Component({
  selector: 'app-retreats',
  standalone: true,
  imports: [
    HeroComponent,
    ChipsComponent,
    ProductCardComponent,
    FeatureCardComponent
  ],
  templateUrl: './retreats.component.html',
  styleUrl: './retreats.components.css'
})
export class RetreatsComponent {

  categories = [
    'Healing Retreats',
    'Varmam Therapy',
    'Corporate Wellness',
    'Stress & Burnout Programs',
    'Longevity Stays'
  ];

}