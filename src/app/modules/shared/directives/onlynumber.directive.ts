import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyBinary]'
})
export class OnlyNumberDirective {

  constructor(private el: ElementRef) { }

  @Input() OnlyBinary: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {

    let e = <KeyboardEvent>event;
    if (this.OnlyBinary) {
      if ([96, 97, 48, 49].indexOf(e.keyCode) !== -1) {

        return;
      }

      if ([9, 6, 46, 8, 16, 37, 39].indexOf(e.keyCode) === -1) {
        e.preventDefault();
      }
    }
  }
}