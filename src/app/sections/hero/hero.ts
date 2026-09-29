import { Component, OnInit, HostListener } from '@angular/core';
import { NgxFuzzyTextComponent } from '@omnedia/ngx-fuzzy-text';

@Component({
  selector: 'app-hero',
  imports: [NgxFuzzyTextComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  fontsReady = false;
  scrolled = false;

  iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';
  stack = [
    { name: 'React', icon: 'react/react-original.svg' },
    { name: 'Angular', icon: 'angular/angular-original.svg' },
    { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
    { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', icon: 'bootstrap/bootstrap-original.svg' },
    { name: 'Firebase', icon: 'firebase/firebase-plain.svg' },
    { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
    { name: 'Git', icon: 'git/git-original.svg' },
  ];

  ngOnInit() {
    // Wait for fonts to load before showing the fuzzy text.
    // The ngx-fuzzy-text library has a race condition: its IntersectionObserver
    // fires before its async init() completes (which awaits document.fonts.ready),
    // so the animation never starts when the component is already in the viewport.
    // By delaying the component mount until fonts are ready, init() resolves fast
    // and the observer callback finds initialized=true.
    document.fonts.ready.then(() => {
      // Small additional delay to ensure Angular has processed the font readiness
      setTimeout(() => {
        this.fontsReady = true;
      }, 50);
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 100;
  }
}
