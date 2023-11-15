import { Component, Input } from '@angular/core';
import { Info } from '../types/Info';

@Component({
  selector: 'ngx-list-item-component',
  templateUrl: 'list-item.component.html',
})
export class NgxMinimalistListItemComponent {
  @Input({ required: true }) info!: Info;
  @Input() active = false;
}
