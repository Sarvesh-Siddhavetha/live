// Claude (Anthropic): created this file — Siddhavetha EY-style rebuild
import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';

@Component({
  selector: 'app-about',
  imports: [HeroComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  foundation = [
    {
      title: 'Brand Purpose',
      text: 'To reunite ancient wisdom, modern science, and sustainability into one living ecosystem that heals people and planet alike.'
    },
    {
      title: 'Brand Mission',
      text: "Build the world's first 600-acre transdisciplinary conscious-living campus where Siddha sciences, plant-based agriculture, and global research co-exist as a community."
    },
    {
      title: 'Brand Vision',
      text: 'A global network of conscious-living campuses making compassionate, sustainable, holistic education the new normal for humanity.'
    },
    {
      title: 'Brand Promise',
      text: 'Knowledge that is rooted, regenerative, and never cruel — wisdom you can live inside.'
    },
    {
      title: 'Positioning',
      text: 'For conscious learners, institutions, and impact investors, Siddhavetha is the only education-and-wellness ecosystem that fuses Siddha tradition with net-negative sustainability at campus scale.'
    },
    {
      title: 'Brand Archetype',
      text: "The Sage — truth, ancient knowledge — fused with The Caregiver's compassion (Jeevakarunyam), with a Pioneer's drive to create a new category."
    }
  ];

  voice = [
    { title: 'Warm, not soft.', text: 'We speak with heart, but back it with evidence, acreage, and outcomes.' },
    { title: 'Rooted, not preachy.', text: 'We honour tradition without dogma; we invite, never lecture.' },
    { title: 'Visionary, not vague.', text: 'Big purpose, expressed in concrete numbers and tangible places.' }
  ];

  emotional = ['Reverence', 'Serenity', 'Belonging', 'Hope', 'Trust'];
  functional = ['Transdisciplinary', 'Evidence-based', 'Net-negative', 'Integrated (one campus)', 'Globally-connected (70+ partners)'];
}
