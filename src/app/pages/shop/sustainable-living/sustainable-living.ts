import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/hero/hero';
import { ChipsComponent } from '../../../components/chips/chips';
import { ProductCardComponent } from '../../../components/product-card/product-card';
import { PromiseStripComponent } from '../../../components/promise-strip/promise-strip';
import { ButtonComponent } from '../../../components/button/button';
@Component({
  selector: 'app-sustainable-living',
  standalone: true,
  imports: [
    HeroComponent,
    ChipsComponent,
    ProductCardComponent,
    ButtonComponent
  ],
  templateUrl: './sustainable-living.html',
  styleUrl: '../../../common.css'
})
export class SustainableLivingComponent {

  categories = [
    'Herbal Home Care',
    'Natural Pest Control',
    'Eco Household',
    'Organic Lifestyle Kits ',
    'Culinary Medicine Foods'
  ];

}