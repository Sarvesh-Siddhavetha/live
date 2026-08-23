import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {

  @Input() category = '';

  @Input() title = '';

  @Input() description = '';

  @Input() price = '';

  @Input() image = '';

}