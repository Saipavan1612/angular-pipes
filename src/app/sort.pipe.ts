import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  //pure: false transform execute anytime if anything changes
})
export class SortPipe implements PipeTransform {

  transform(value: number[] | string[], direction: 'asc' | 'desc' = 'asc'): any {
    const sorted = [...value];
    sorted.sort((a, b) => {
      if(direction === 'asc') {
        return a > b ? 1 : -1;
      } else {
        return a > b ? -1 : 1;
      }
    });
    return sorted;
  }

}
