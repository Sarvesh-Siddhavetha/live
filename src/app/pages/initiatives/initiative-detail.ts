import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface InitiativePageData {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  focus: Array<{ title: string; text: string }>;
}

@Component({
  selector: 'app-initiative-detail',
  imports: [RouterLink],
  templateUrl: './initiative-detail.html',
  styleUrl: './initiative-detail.css'
})
export class InitiativeDetail {
  private readonly route = inject(ActivatedRoute);
  readonly page = this.route.snapshot.data as InitiativePageData;
}
