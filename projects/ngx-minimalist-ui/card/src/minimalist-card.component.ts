import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lib-minimalist-card',
  templateUrl: './minimalist-card.component.html',
  styleUrls: ['./minimalist-card.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxMinimalistCardComponent {
  @Output() headerClick = new EventEmitter<Event>();
  @Input() showHeaderIcon!: boolean;

  headerClicked(event: Event) {
    this.headerClick.emit(event);
  }
}
