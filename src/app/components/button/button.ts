import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class ButtonComponent {

  @Input() label = 'Button';

  @Input() variant:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'dark'
    | 'ghost'
    | 'header' = 'primary';

  @Input() disabled = false;

}