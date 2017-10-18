import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') size: string;
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('click') onMouseEnter() {
    this.highlight(this.size || '50%');

  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('100%');
  }
  
  private highlight(size: string) {
    this.el.style.fontSize = size;
  }
}