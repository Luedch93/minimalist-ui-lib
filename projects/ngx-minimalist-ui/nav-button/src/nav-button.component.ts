import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-minimalist-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css'],
})
export class NgxMinimalistNavButtonComponent {
  @Output() clicked = new EventEmitter<Event>();

  onClick(event: Event) {
    this.clicked.emit(event);
  }
}
