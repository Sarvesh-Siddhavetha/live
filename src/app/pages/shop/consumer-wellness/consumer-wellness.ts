import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/hero/hero';
import { ChipsComponent } from '../../../components/chips/chips';
import { ProductCardComponent } from '../../../components/product-card/product-card';
import { FeatureCardComponent } from '../../../components/feature-card/feature-card';

@Component({
  selector: 'app-consumer-wellness',
  standalone: true,
  imports: [
  HeroComponent,
  ChipsComponent,
  ProductCardComponent,
  FeatureCardComponent
],
  templateUrl: './consumer-wellness.html',
  styleUrl: './consumer-wellness.css'
})
export class ConsumerWellnessComponent {
  categories = [
  'Supplements',
  'Functional Beverages',
  "Women's Health",
  'Sleep',
  "Children's Wellness",
  'Immunity',
  'Senior Wellness'
];
}