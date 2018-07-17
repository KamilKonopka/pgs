import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputAsterisk]'
})
export class InputAsteriskDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
  }

}


