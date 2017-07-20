import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'util';

@Pipe({
  name: 'strReplace'
})
export class StrReplacePipe implements PipeTransform {

  transform(text: any, search?: any, replace?: any): any {
    return isString(text) ? text.replace(search, replace) : text;
  }

}
