import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typecasting'
})
export class TypecastingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
