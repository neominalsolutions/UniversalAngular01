import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[textColorAttribute]',
})
export class TextColorDirective implements OnInit {
  // html element view doma yansımadan önce araya girip dom çıktısını özelleştirmemizi sağlayan bir teknik
  // ElementRef html element referansı

  @Input('textColorAttribute')
  set textColor(color: string) {
    (this.elementRef.nativeElement as HTMLElement).style.color = color;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // constructor üzerinde dom ile ilgili bir işlem yapmayız element ref undefined gelir.
  }

  ngOnInit(): void {
    // element doma ilk basıldığı an olan OnInit hook bunu yapabiliriz.
    console.log('element', this.elementRef.nativeElement);
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'title',
      'deneme'
    );
  }

  @HostListener('mouseenter', ['$event'])
  mouseOver(event: any) {
    console.log('event', event);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
  }

  // addEventListener('click', ()=> {})
  @HostListener('click', ['$event'])
  mouseClick(event: any) {
    console.log('event', event);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
  }
}
