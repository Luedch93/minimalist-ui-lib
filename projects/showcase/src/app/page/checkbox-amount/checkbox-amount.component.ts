import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {
  CheckboxItem,
  CheckboxItemEvent,
} from 'ngx-minimalist-ui/checkbox-amount';

@Component({
  selector: 'app-checkbox-amount',
  templateUrl: './checkbox-amount.component.html',
  styleUrls: ['./checkbox-amount.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxAmountShowCase {
  checkboxItems: CheckboxItem[] = [
    {
      text: 'GLORIOUS MODEL O PRO WIRELESS - BLUE LYNX',
      value: 915,
    },
    {
      text: 'GLORIOUS MODEL O- WIRELESS MATTE WHITE',
      value: 650,
      icon: 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.8.0/png/iconmonstr-paste-lined.png',
    },
    {
      text: 'LOGITECH GEAR UP BUNDLE',
      value: 1250,
    },
  ];
  fg = this.fb.group({
    'item-1': ['', [Validators.required]],
    'item-2': ['', [Validators.required]],
    'item-3': [
      {
        text: 'LOGITECH GEAR UP BUNDLE',
        value: 1250,
        checked: true,
      },
      [Validators.required],
    ],
  });

  constructor(private fb: FormBuilder) {}

  onCheckBoxChange(checkBoxEvent: CheckboxItemEvent) {
    console.log(checkBoxEvent);
  }

  resetForm() {
    this.fg.reset();
  }

  handleSubmit() {
    if (this.fg.valid) {
      console.log(this.fg.value);
    }
  }
}
