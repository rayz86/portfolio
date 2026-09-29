import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() buttonUrl!: string;
}
