import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, max_char: number = 2): any {
    if (value && value.length > 2) {
      return value.substr(0, max_char) + '***';
    }
    return null;
  }

}
