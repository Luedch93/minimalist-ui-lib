import { Component, Input } from '@angular/core';
import { IconName } from '../types/IconName';

@Component({
  selector: 'ngx-minimalist-icon-selector',
  templateUrl: './icon-selector.component.html',
})
export class NgxMinimalistIconSelectorComponent {
  @Input({ required: true }) icon: IconName = 'transportation';
  @Input() active = false;
}
