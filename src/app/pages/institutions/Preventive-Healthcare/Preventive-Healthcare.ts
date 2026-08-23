import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/hero/hero';
import { ChipsComponent } from '../../../components/chips/chips';
import { FeatureCardComponent } from '../../../components/feature-card/feature-card';
import { PromiseStripComponent } from '../../../components/promise-strip/promise-strip';
import { ButtonComponent } from '../../../components/button/button';

@Component({
  selector: 'app-preventive-healthcare',
  standalone: true,
  imports: [
    HeroComponent,
    ChipsComponent,
    FeatureCardComponent,
    ButtonComponent
  ],
  templateUrl: './preventive-healthcare.html',
  styleUrl: './Preventive-Healthcare.css'
})
export class PreventiveHealthcareComponent {

  chips = [
    'Personalized Wellness Plans',
    'Health Risk Assessments',
    'Preventive Subscriptions',
    'Seasonal Protocols'
  ];

  trustStrip = [
    '2000+ Years of Wisdom',
    'Clinically Grounded',
    'Personalized',
    'Preventive Approach'
  ];

}