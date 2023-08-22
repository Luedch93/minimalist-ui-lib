import { Directive, ElementRef, OnInit } from '@angular/core';

const STATE_DEFAULT = 1;

@Directive({
  selector: '[minimalistSlider]',
})
export class SliderDirective implements OnInit {
  initialTouchPos: any;
  lastTouchPos: any;
  rafPending: boolean = false;
  currentXPosition: number = 0;
  currentState = STATE_DEFAULT;
  slopValue!: number;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // cuarta parte del largo total
    this.slopValue = this.elementRef.nativeElement.itemWidth * (1 / 4);

    if (window.PointerEvent) {
      // Add Pointer Event Listener
      this.elementRef.nativeElement.addEventListener(
        'pointerdown',
        this.handleGestureStart.bind(this),
        true
      );
      this.elementRef.nativeElement.addEventListener(
        'pointermove',
        this.handleGestureMove.bind(this),
        true
      );
      this.elementRef.nativeElement.addEventListener(
        'pointerup',
        this.handleGestureEnd.bind(this),
        true
      );
      this.elementRef.nativeElement.addEventListener(
        'pointercancel',
        this.handleGestureEnd.bind(this),
        true
      );
    } else {
      // Add Touch Listener
      this.elementRef.nativeElement.addEventListener(
        'touchstart',
        this.handleGestureStart.bind(this),
        true
      );
      this.elementRef.nativeElement.addEventListener(
        'touchmove',
        this.handleGestureMove.bind(this),
        true
      );
      this.elementRef.nativeElement.addEventListener(
        'touchend',
        this.handleGestureEnd.bind(this),
        true
      );
      this.elementRef.nativeElement.addEventListener(
        'touchcancel',
        this.handleGestureEnd.bind(this),
        true
      );

      // Add Mouse Listener
      this.elementRef.nativeElement.addEventListener(
        'mousedown',
        this.handleGestureStart.bind(this),
        true
      );
    }
  }

  handleGestureStart(evt: any) {
    evt.preventDefault();

    if (evt.touches && evt.touches.length > 1) {
      return;
    }

    // Add the move and end listeners
    if (window.PointerEvent) {
      evt.target.setPointerCapture(evt.pointerId);
    } else {
      // Add Mouse Listeners
      document.addEventListener('mousemove', this.handleGestureMove, true);
      document.addEventListener('mouseup', this.handleGestureEnd, true);
    }

    this.initialTouchPos = this.getGesturePointFromEvent(evt);

    this.elementRef.nativeElement.style.transition = 'initial';
  }

  handleGestureMove(evt: any) {
    evt.preventDefault();

    if (!this.initialTouchPos) {
      return;
    }

    this.lastTouchPos = this.getGesturePointFromEvent(evt);

    if (this.rafPending) {
      return;
    }

    this.rafPending = true;

    this.getRequestAnimFrame()(this.onAnimFrame.bind(this));
  }

  handleGestureEnd(evt: any) {
    evt.preventDefault();

    if (evt.touches && evt.touches.length > 0) {
      return;
    }

    this.rafPending = false;

    // Remove Event Listeners
    if (window.PointerEvent) {
      evt.target.releasePointerCapture(evt.pointerId);
    } else {
      // Remove Mouse Listeners
      document.removeEventListener('mousemove', this.handleGestureMove, true);
      document.removeEventListener('mouseup', this.handleGestureEnd, true);
    }

    this.updateSwipeRestPosition();

    this.initialTouchPos = null;
  }

  getGesturePointFromEvent(evt: any) {
    let point: any = {};

    if (evt.targetTouches) {
      point.x = evt.targetTouches[0].clientX;
      point.y = evt.targetTouches[0].clientY;
    } else {
      // Either Mouse event or Pointer Event
      point.x = evt.clientX;
      point.y = evt.clientY;
    }

    return point;
  }

  getRequestAnimFrame() {
    const w = window as any;
    return (
      w.requestAnimationFrame ||
      w.webkitRequestAnimationFrame ||
      w.mozRequestAnimationFrame ||
      function (callback: any) {
        w.setTimeout(callback, 1000 / 60);
      }
    );
  }

  onAnimFrame() {
    if (!this.rafPending) {
      return;
    }

    let differenceInX = this.initialTouchPos.x - this.lastTouchPos.x;

    let newXTransform = this.currentXPosition - differenceInX + 'px';
    let transformStyle = 'translateX(' + newXTransform + ')';
    this.elementRef.nativeElement.style.webkitTransform = transformStyle;
    this.elementRef.nativeElement.style.MozTransform = transformStyle;
    this.elementRef.nativeElement.style.msTransform = transformStyle;
    this.elementRef.nativeElement.style.transform = transformStyle;

    this.rafPending = false;
  }

  updateSwipeRestPosition() {
    let differenceInX = this.initialTouchPos.x - this.lastTouchPos.x;
    this.currentXPosition = this.currentXPosition - differenceInX;

    // Go to the default state and change
    let newState = STATE_DEFAULT;
  }
}
