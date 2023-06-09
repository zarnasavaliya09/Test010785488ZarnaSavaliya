import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[weightColor]'
})
export class WeightColorDirective implements OnChanges {

  @Input('weightColor')
  weight!: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.weight > 9000) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'orange');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
    }
  }

}
