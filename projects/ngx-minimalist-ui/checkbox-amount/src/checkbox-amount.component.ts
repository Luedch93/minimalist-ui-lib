import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CheckboxItem, CheckboxItemEvent } from './types';

@Component({
  selector: 'lib-minimalist-checkbox-amount',
  templateUrl: './checkbox-amount.component.html',
  styleUrls: ['./checkbox-amount.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxMinimalistCheckboxAmountComponent {
  @Input({ required: true }) checkboxItem!: CheckboxItem;
  @Output() checked = new EventEmitter<CheckboxItemEvent>();
  private _checked: boolean = false;

  checkboxClicked() {
    this._checked = !this._checked;
    this.checked.emit({
      ...this.checkboxItem,
      checked: this._checked,
    });
  }

  get value(): boolean {
    return this._checked;
  }
}
