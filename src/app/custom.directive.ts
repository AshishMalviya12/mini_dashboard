import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective {
  @Input() defaultColor: string = 'transparent';

  @Input('appBetterHighlight') highlightColor: string = '#CFDBEA';

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.elRef.nativeElement.style.backgroundColor = 'green';
    this.backgroundColor = this.defaultColor;

    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      '#CFDBEA'
    );
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-style', 'italic');
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      '#CFDBEA'
    );

    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-style', 'normal');
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'transparent'
    );

    this.backgroundColor = this.defaultColor;
  }
}
