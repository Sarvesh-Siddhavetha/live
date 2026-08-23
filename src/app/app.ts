// Claude (Anthropic): substantially modified this file — Siddhavetha EY-style rebuild
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { FooterComponent } from './components/footer/footer';
import { NavbarComponent } from './components/navbar/navbar';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(router: Router) {
    router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        if (!location.hash) {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
        }
      });
  }
}
