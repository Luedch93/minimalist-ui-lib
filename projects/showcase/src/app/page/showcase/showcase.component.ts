import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DateSliderItem } from 'ngx-minimalist-ui/date-slider';
import { SummaryList } from 'ngx-minimalist-ui/summary';
import {
  CheckboxItem,
  CheckboxItemEvent,
} from 'ngx-minimalist-ui/checkbox-amount';
import { Info } from 'ngx-minimalist-ui/process-list';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShowcaseComponent implements OnInit {
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
  currentStep = 1;
  infos: Info[] = [
    {
      title: 'Gathering your products',
      description: 'This can take around 15 minutes...',
      date: new Date(),
      icon: 'shopping-cart',
    },
    {
      title: 'Calculating the location',
      description: 'Activate your GPS...',
      date: new Date(),
      icon: 'location',
    },
    {
      title: 'Sending package',
      description: 'Wait until the driver arrives...',
      date: new Date(),
      icon: 'transportation',
    },
    {
      title: 'Delivered',
      description: 'Thanks for using our service...',
      date: new Date(),
      icon: 'gift',
    },
  ];
  fg = new FormGroup({
    search: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    setTimeout(() => {
      this.currentStep = 3;
    }, 1500);
  }

  logEvent(event: any) {
    console.log(event);
  }

  handleDateSelected(date: DateSliderItem) {
    console.log(date);
  }

  onCheckBoxChange(checkBoxEvent: CheckboxItemEvent) {
    console.log(checkBoxEvent);
  }

  logProgressChange(step: number) {
    console.log('Step change:', step);
  }

  handleHeaderClick(event: Event) {
    console.log(event);
  }

  onNavButtonClick(event: Event) {
    console.log(event);
  }

  handleItemSelected(info: Info) {
    console.log(info);
  }
}
