import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/hero/hero';
import { FeatureCardComponent } from '../../../components/feature-card/feature-card';
import { ButtonComponent } from '../../../components/button/button';

@Component({
  selector: 'app-partner-invest',
  standalone: true,
  imports: [
    HeroComponent,
    FeatureCardComponent,
    ButtonComponent
  ],
  templateUrl: './partner-invest.html',
  styleUrl: './partner-invest.css'
})
export class PartnerInvestComponent {}