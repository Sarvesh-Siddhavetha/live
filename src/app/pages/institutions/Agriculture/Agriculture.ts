import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/hero/hero';
import { ChipsComponent } from '../../../components/chips/chips';
import { FeatureCardComponent } from '../../../components/feature-card/feature-card';
import { PromiseStripComponent } from '../../../components/promise-strip/promise-strip';
import { ButtonComponent } from '../../../components/button/button';

@Component({
  selector: 'app-agriculture',
  standalone: true,
  imports: [
    HeroComponent,
    ChipsComponent,
    FeatureCardComponent,
    ButtonComponent
  ],
  templateUrl: './Agriculture.html',
  styleUrl: './Agriculture.css'
})
export class AgricultureComponent {

  chips = [
    'Medicinal Herb Cultivation',
    'Contract Farming',
    'Seed Banks',
    'Rare Plant Conservation',
    'Organic Exports'
  ];

  trustStrip = [
    '100% Organic',
    'Water-Secured',
    'Cruelty-Free',
    'Soil-to-Shelf Traceability',
    'Rare Plant Preservation'
  ];

}