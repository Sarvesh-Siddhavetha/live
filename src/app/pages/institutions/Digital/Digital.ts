import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/hero/hero';
import { ChipsComponent } from '../../../components/chips/chips';
import { FeatureCardComponent } from '../../../components/feature-card/feature-card';
import { PromiseStripComponent } from '../../../components/promise-strip/promise-strip';
import { ButtonComponent } from '../../../components/button/button';

@Component({
  selector: 'app-digital',
  standalone: true,
  imports: [
    HeroComponent,
    ChipsComponent,
    FeatureCardComponent,
    ButtonComponent
  ],
  templateUrl: './Digital.html',
  styleUrl: './Digital.css'
})
export class DigitalComponent {

  chips = [
    'AI Health Assistant',
    'Recommendation Engine',
    'Mobile App',
    'Teleconsultation',
    'Digital Health Records',
    'Analytics'
  ];

  trustStrip = [
    'Encrypted',
    'You Own Your Data',
    'No Ads',
    'Privacy First'
  ];

}