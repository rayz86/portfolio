import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expcard',
  imports: [],
  templateUrl: './expcard.html',
  styleUrl: './expcard.scss',
})
export class Expcard {
  @Input() companyName!: string;
  @Input() logo!: string;
  @Input() position!: string;
  @Input() duration!: string;
  @Input() description!: string;
  @Input() location!: string;
}
