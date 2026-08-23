import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/hero/hero';
import { ChipsComponent } from '../../../components/chips/chips';
import { ProductCardComponent } from '../../../components/product-card/product-card';
import { PromiseStripComponent } from '../../../components/promise-strip/promise-strip';
import { ButtonComponent } from '../../../components/button/button';
@Component({
  selector: 'app-personal-care',
  standalone: true,
  imports: [
    HeroComponent,
    ChipsComponent,
    ProductCardComponent,
    PromiseStripComponent,
    ButtonComponent
  ],
  templateUrl: './personal-care.html',
  styleUrl: '../../../common.css'
})
export class PersonalCareComponent {

  categories = [
    'Skincare',
    'Haircare',
    'Anti-Aging',
    'Herbal Cosmetics',
    'Therapeutic Oils',
    'Bath & Body',
    'Natural Fragrance'
  ];

}