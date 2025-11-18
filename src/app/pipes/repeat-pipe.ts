import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat'
})
export class RepeatPipe implements PipeTransform {

  transform(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }

}
