import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playCount'
})
export class PlayCountPipe implements PipeTransform {

  transform(value: number): number | string {
    let returnValue;
    value > 10000 ? returnValue = Math.floor(value / 10000) + "万" : returnValue = value;
    return returnValue;
  }

}
