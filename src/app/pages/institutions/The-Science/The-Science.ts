import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/hero/hero';
import { ChipsComponent } from '../../../components/chips/chips';
import { FeatureCardComponent } from '../../../components/feature-card/feature-card';
import { ButtonComponent } from '../../../components/button/button';

@Component({
  selector: 'app-The-Science',
  standalone: true,
  imports: [
    HeroComponent,
    ChipsComponent,
    FeatureCardComponent,
    ButtonComponent
  ],
  templateUrl: './The-Science.html',
  styleUrl: './The-Science.css'
})
export class TheScienceComponent {

  chips = [
    'Patented Formulations',
    'Clinical Research Products',
    'Nutraceutical Innovation',
    'Siddha Medical Devices',
    'Licensing'
  ];

  trustStrip = [
    '100% Organic',
    'Cruelty-Free',
    'Made in Indian Soil',
    'Soil-to-Shelf',
    '70+ Global Partners'
  ];

}