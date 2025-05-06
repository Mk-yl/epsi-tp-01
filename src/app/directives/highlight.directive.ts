import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges {
  @Input() appHighlight: boolean = false;

  constructor(private el: ElementRef) {}
// TODO 24: Modifier la directive pour que le texte soit en gras si l'input est true et appliquer cela au champ title du livre sur les pages book-detail et book-list
  ngOnChanges(changes: SimpleChanges): void {
    this.updateStyles();
  }

  private updateStyles(): void {
    if (this.appHighlight) {
      this.el.nativeElement.style.backgroundColor = '#c87d55';
      this.el.nativeElement.style.fontWeight = 'bold';
    } else {
      this.el.nativeElement.style.backgroundColor = '';
      this.el.nativeElement.style.fontWeight = 'normal';
    }
  }
}
