import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {

  @Input() category = '';

  @Input() title = '';

  @Input() description = '';

  @Input() buttonText = '';

  @Input() image = '';

}