import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { CheckboxItem, CheckboxItemEvent } from './types';

@Component({
  selector: 'lib-minimalist-checkbox-amount',
  templateUrl: './checkbox-amount.component.html',
  styleUrls: ['./checkbox-amount.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgxMinimalistCheckboxAmountComponent,
    },
  ],
})
export class NgxMinimalistCheckboxAmountComponent
  implements ControlValueAccessor
{
  @Input({ required: true }) checkboxItem!: CheckboxItem;
  @Output() checked = new EventEmitter<CheckboxItemEvent>();
  onChange = (_: any) => {};
  onTouched = () => {};
  private _checked: boolean = false;
  private _checkboxItemEvent = { ...this.checkboxItem, checked: false };
  private _touched = false;
  private _disabled = false;

  checkboxClicked() {
    this.markAsTouched();
    if (!this._disabled) {
      const checkboxItemEvent: CheckboxItemEvent = {
        ...this.checkboxItem,
        checked: this._checked,
      };
      this._checked = !this._checked;
      this.onChange(checkboxItemEvent);
      this.checked.emit(checkboxItemEvent);
    }
  }

  get value(): boolean {
    return this._checked;
  }

  writeValue(checkboxItemEvent: CheckboxItemEvent) {
    if (!checkboxItemEvent) {
      this._checked = false;
      this._checkboxItemEvent = {
        ...this._checkboxItemEvent,
        checked: false,
      };

      return;
    }
    this._checkboxItemEvent = checkboxItemEvent;
    this._checked = checkboxItemEvent.checked;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this._touched) {
      this.onTouched();
      this._touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this._disabled = disabled;
  }
}
