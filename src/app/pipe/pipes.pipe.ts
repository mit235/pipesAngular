import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [a]=args;
    console.log(args)
    return value*a;
  }

}
