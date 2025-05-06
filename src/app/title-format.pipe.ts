import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleFormat'
})
export class TitleFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const formatted = value
      .replace(/_/g, ' ')
      .toLowerCase()
      .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    return formatted;
  }
}
