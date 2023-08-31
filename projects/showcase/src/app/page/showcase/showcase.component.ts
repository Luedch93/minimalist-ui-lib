import { Component } from '@angular/core';

import { DateSliderItem } from 'ngx-minimalist-ui/date-slider';
import { SummaryList } from 'ngx-minimalist-ui/summary';
import {
  CheckboxItem,
  CheckboxItemEvent,
} from 'ngx-minimalist-ui/checkbox-amount';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent {
  backgroundColor = '#daf5ff';
  products: SummaryList[] = [
    {
      detail: 'Cosmic Unity 2',
      amount: 1199,
    },
    {
      detail: 'Nike X Hot Wheels',
      amount: 1069,
    },
    {
      detail: 'Molten B7G5000',
      amount: 1249,
    },
  ];
  currency = 'EUR';
  checkboxItem: CheckboxItem = {
    text: 'Laser gun',
    value: 200,
  };

  logEvent(event: any) {
    console.log(event);
  }

  handleDateSelected(date: DateSliderItem) {
    console.log(date);
  }

  onCheckBoxChange(checkBoxEvent: CheckboxItemEvent) {
    console.log(checkBoxEvent);
  }
}