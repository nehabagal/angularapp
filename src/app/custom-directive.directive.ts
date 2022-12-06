import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private el: ElementRef,private render: Renderer2) { 
    console.log('Custom directive applied');
    //el.nativeElement.style.backgroundColor= 'gray';
    //el.nativeElement.style.display= 'none';
    render.setStyle(el.nativeElement, 'backgroundColor','yellow');
  }

}
