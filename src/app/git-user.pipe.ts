import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gitUser'
})
export class GitUserPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
