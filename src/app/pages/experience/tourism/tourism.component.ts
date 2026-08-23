import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/hero/hero';
import { ChipsComponent } from '../../../components/chips/chips';
import { ProductCardComponent } from '../../../components/product-card/product-card';
import { FeatureCardComponent } from '../../../components/feature-card/feature-card';
import { ButtonComponent } from '../../../components/button/button';

@Component({
  selector: 'app-tourism',
  standalone: true,
  imports: [
    HeroComponent,
    ChipsComponent,
    ProductCardComponent,
    FeatureCardComponent,
    ButtonComponent
  ],
  templateUrl: './tourism.component.html',
  styleUrl: './tourism.component.css'
})
export class TourismComponent {

  categories = [
    'Siddha Heritage Tours',
    'Medical Tourism',
    'Village Immersion',
    'Cultural Learning'
  ];

}