import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { BorderStyle } from './types/BorderStyle';

@Directive({
  selector: 'figure[smallFigure]',
})
export class NgxMinimalistSmallFigureDirective implements OnInit {
  @Input() borderStyle: BorderStyle = 'solid';
  private nativeEl!: HTMLElement;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.nativeEl = this.el.nativeElement;
    this.addBorder();
    this.resizeImg();
    this.inlineFigure();
  }

  inlineFigure() {
    this.nativeEl.style.display = 'inline-block';
    this.nativeEl.style.margin = '0';
  }

  resizeImg() {
    const imgEl = this.nativeEl.querySelector('img') as HTMLImageElement;
    imgEl.setAttribute('width', '30px');
  }

  addBorder() {
    const imgEl = this.nativeEl.querySelector('img') as HTMLImageElement;
    imgEl.style.border = `1px black ${this.borderStyle}`;
    imgEl.style.borderRadius = '3px';
    imgEl.style.padding = '3px';
  }
}
