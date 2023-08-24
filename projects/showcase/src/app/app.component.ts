import { Component, OnInit } from '@angular/core';

import { DateSliderItem } from 'ngx-minimalist-ui/date-slider';
import { SummaryList } from 'ngx-minimalist-ui/summary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'showcase';
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

  ngOnInit(): void {}

  logEvent(event: any) {
    console.log(event);
  }

  handleDateSelected(date: DateSliderItem) {
    console.log(date);
  }
}
