import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor="orange"
  }

  @HostListener('mouseenter')highLight(){
    this.element.nativeElement.style.backgroundColor="orange"
  }
  @HostListener('mouseleave')cancelHighLight(){
    this.element.nativeElement.style.backgroundColor=null
  }

}
