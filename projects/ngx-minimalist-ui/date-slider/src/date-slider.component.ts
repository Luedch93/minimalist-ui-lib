import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS,
  Validator,
} from '@angular/forms';

import { Observable } from 'rxjs';

import { DateService, FormatService } from './services';
import { DateSliderItem } from './types';

@Component({
  selector: 'lib-minimalist-date-slider',
  templateUrl: './date-slider.component.html',
  providers: [
    DateService,
    FormatService,
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DateSliderComponent,
    },
  ],
})
export class DateSliderComponent implements OnInit, ControlValueAccessor {
  @Output() dateChange = new EventEmitter<DateSliderItem>();
  @Input() date!: string;
  sliderDates$: Observable<DateSliderItem[]> = this.dateService.sliderDates$;
  activeDate!: string | null;
  touched = false;
  disabled = false;
  onChange = (date: Date) => {};
  onTouched = () => {};

  constructor(private dateService: DateService) {}

  ngOnInit(): void {
    const date = this.date ? new Date(this.date) : new Date();

    this.dateService.setDate(date);
  }

  handleClick(selectedDate: DateSliderItem): void {
    this.markAsTouched();
    if (!this.disabled) {
      this.activeDate = selectedDate.monthDate;
      this.onChange(selectedDate.date);
      this.dateChange.emit(selectedDate);
    }
  }

  writeValue(date: DateSliderItem): void {
    if (date === null) {
      this.activeDate = null;
      return;
    }
    if (date instanceof Date) {
      this.activeDate = String(date.getDate());
      return;
    }
    this.activeDate = date.monthDate;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
