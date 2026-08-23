// Claude (Anthropic): substantially modified this file — Siddhavetha EY-style rebuild
import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

  megaOpen = signal(false);
  mobileOpen = signal(false);
  scrolled = signal(false);

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.megaOpen.set(false);
      this.mobileOpen.set(false);
    });
  }

  toggleMega(): void {
    this.megaOpen.update(v => !v);
  }

  closeMega(): void {
    this.megaOpen.set(false);
  }

  toggleMobile(): void {
    this.mobileOpen.update(v => !v);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.megaOpen.set(false);
    this.mobileOpen.set(false);
  }
}
