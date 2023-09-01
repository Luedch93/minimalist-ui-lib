import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-minimalist-button',
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxMinimalistButtonComponent {
  @Input() disabled: boolean = false;
}
