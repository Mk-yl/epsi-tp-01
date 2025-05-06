import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
  standalone: true
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
        value = value.replace(/_/g, ' ');
    
    const words = value.split(' ');
    
    if (words.length > 0) {
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
            for (let i = 1; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
      }
    }
    
    return words.join(' ');
  }
}