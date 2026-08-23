import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/hero/hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent
  ],
  templateUrl: './our-story.html',
  styleUrl: './our-story.css'
})
export class OurStoryComponent {

}