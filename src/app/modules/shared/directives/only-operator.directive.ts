import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyOperator]'
})
export class OnlyOperatorDirective {

  constructor(private el: ElementRef) { }

  @Input() OnlyOperator: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {

    let e = <KeyboardEvent> event;
    if (this.OnlyOperator) {
      if ( [111, 106, 109, 107, 53, 187, 189, 193, 56].indexOf(e.keyCode) !== -1 && ['+', '-', '*', '/', '%'].indexOf(e.key) !== -1) {

          return; 
        }

        if ([9, 6, 46, 8, 16, 37, 39].indexOf(e.keyCode) === -1 ) {
          e.preventDefault();
      }
      }
  }
}