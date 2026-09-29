import { Component, Input, isSignal, type Signal } from '@angular/core';
import { RepeatPipe } from '../../pipes/repeat-pipe';

@Component({
  selector: 'app-roll-banner',
  imports: [RepeatPipe],
  templateUrl: './roll-banner.html',
  styleUrl: './roll-banner.scss',
})
export class RollBanner {
  @Input() text!: string | Signal<string>;

  get currentText(): string {
    if (isSignal(this.text)) {
      return (this.text as Signal<string>)();
    }
    return this.text ?? '';
  }
}
