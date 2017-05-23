import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Filter pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'filter',
})
export class Filter implements PipeTransform {
 transform(value, args: string[]): any {
   console.log(value +'/'+ args );
    let filter = args;

    if (filter && Array.isArray(value)) {
      let filterKeys = Object.keys(filter);
      return value.filter(item =>
      filterKeys.reduce((memo, keyName) =>
      memo && item[keyName] === filter[keyName], true));
    } else {
      return value;
    }
  }
}
