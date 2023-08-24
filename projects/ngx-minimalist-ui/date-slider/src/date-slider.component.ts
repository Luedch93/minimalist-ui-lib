import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { DateService, FormatService } from './services';
import { DateSliderItem } from './types';

@Component({
  selector: 'lib-date-slider',
  templateUrl: './date-slider.component.html',
  providers: [DateService, FormatService],
})
export class DateSliderComponent implements OnInit {
  @Output() dateChange = new EventEmitter<DateSliderItem>();
  @Input() date!: string;
  sliderDates$: Observable<DateSliderItem[]> = this.dateService.sliderDates$;
  activeDate!: string;

  constructor(private dateService: DateService) {}

  ngOnInit(): void {
    const date = this.date ? new Date(this.date) : new Date();

    this.dateService.setDate(date);
    this.activeDate = `${date.getDate()}`;
  }

  handleClick(selectedDate: DateSliderItem): void {
    this.activeDate = selectedDate.monthDate;
    this.dateChange.emit(selectedDate);
  }
}
