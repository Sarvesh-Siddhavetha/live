import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promise-strip',
  standalone: true,
  templateUrl: './promise-strip.html',
  styleUrl: './promise-strip.css'
})
export class PromiseStripComponent {

  @Input() promises: string[] = [];

}