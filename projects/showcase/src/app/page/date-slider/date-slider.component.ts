import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-slider',
  templateUrl: './date-slider.component.html',
  styleUrls: ['./date-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DateSliderComponent {
  formGroup = this.fb.group({
    date: [new Date(), Validators.required],
  });
  dateSliderStatus: any = {
    touched: this.slider.touched,
    valid: this.slider.valid,
    dirty: this.slider.dirty,
    value: this.slider.value,
  };

  constructor(private fb: FormBuilder) {}

  handleDateSelected(event: any) {
    console.log(event);
  }

  get slider(): FormControl {
    return this.formGroup.controls.date;
  }

  resetForm() {
    this.formGroup.reset();
  }
}
