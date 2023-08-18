import { Component, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'lib-ngx-minimalist-button',
  templateUrl: './ngx-minimalist-button.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxMinimalistButtonComponent implements OnChanges {
  @Input() backgroundColor: string = 'white';
  @Input() color: string = 'black';

  currentStyles: Record<string, string> = {
    color: this.color,
    'background-color': this.backgroundColor,
  };

  ngOnChanges() {
    this.setCurrentStyles();
  }

  private setCurrentStyles() {
    this.currentStyles = {
      color: this.color,
      'background-color': this.backgroundColor,
    };
  }
}
