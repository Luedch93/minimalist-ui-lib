import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { DateService, FormatService } from './services';
import { DateSliderItem } from './types';

@Component({
  selector: 'lib-date-slider',
  templateUrl: './date-slider.component.html',
  providers: [DateService, FormatService],
})
export class DateSliderComponent implements OnInit {
  sliderDates$: Observable<DateSliderItem[]> = this.dateService.sliderDates$;
  activeDate!: string;

  constructor(private dateService: DateService) {}

  ngOnInit(): void {
    this.sliderDates$.subscribe(console.log);
    this.dateService.setDate(new Date());
    this.activeDate = `${new Date().getDate()}`;
  }

  handleClick(selectedDate: string): void {
    this.activeDate = selectedDate;
  }
}
