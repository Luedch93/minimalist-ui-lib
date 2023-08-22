import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

import { DateSliderItem } from '../types';
import { FormatService } from './format.service';

@Injectable()
export class DateService {
  private sliderDatesSubject = new BehaviorSubject<DateSliderItem[]>([]);
  sliderDates$: Observable<DateSliderItem[]> =
    this.sliderDatesSubject.asObservable();

  constructor(private formatService: FormatService) {}

  setDate(date: Date | string) {
    this.sliderDatesSubject.next(this.formatService.generateSliderDates(date));
  }
}
