// Claude (Anthropic): created this file — Siddhavetha EY-style rebuild
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EVENTS, EventItem } from '../../../data/events';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css'
})
export class EventDetail {

  event?: EventItem;

  constructor(route: ActivatedRoute) {
    const id = route.snapshot.paramMap.get('id');
    this.event = EVENTS.find(e => e.id === id);
  }
}
