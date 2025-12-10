import { NgStyle } from '@angular/common';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { NgxFuzzyTextComponent } from '@omnedia/ngx-fuzzy-text';

@Component({
  selector: 'app-hero',
  imports: [NgStyle, NgxFuzzyTextComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  mouseX=0;
  mouseY=0;

  updateMouse (event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  ngOnInit() {
    // Add scroll listener when component initializes
    window.addEventListener('scroll', this.handleScroll);
  }

  ngOnDestroy() {
    // Clean up scroll listener when component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  }

  @HostListener('window:scroll', [])
  handleScroll = () => {
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (scrollIndicator) {
      if (window.scrollY > 100) {
        scrollIndicator.classList.add('hidden');
      } else {
        scrollIndicator.classList.remove('hidden');
      }
    }
  }

}
