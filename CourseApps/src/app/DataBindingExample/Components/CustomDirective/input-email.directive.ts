import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputEmail]',
})
export class InputEmailDirective {
  constructor(private elemnt: ElementRef) {}

  @HostListener('focus') onFocus() {
    this.elemnt.nativeElement.classList.add('bg-warning');
  }

  @HostListener('blur') onBlur() {
    this.elemnt.nativeElement.classList.remove('bg-warning');

    let value: string = this.elemnt.nativeElement.value;
    if (!value.includes('@')) {
      this.elemnt.nativeElement.value =
        value.toLocaleLowerCase() + '@gmail.com';
    }
  }
}
