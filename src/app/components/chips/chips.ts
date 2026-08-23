import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './chips.html',
  styleUrl: './chips.css'
})
export class ChipsComponent {

  @Input() chips: string[] = [];

}