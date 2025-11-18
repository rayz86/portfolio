import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { NgxFuzzyTextComponent } from '@omnedia/ngx-fuzzy-text';

@Component({
  selector: 'app-hero',
  imports: [NgStyle, NgxFuzzyTextComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  mouseX=0;
  mouseY=0;

  updateMouse (event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

}
