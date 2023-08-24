import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateSliderComponent } from './date-slider.component';
import { SliderDirective } from './directives';

@NgModule({
  declarations: [DateSliderComponent],
  imports: [CommonModule],
  exports: [DateSliderComponent],
})
export class DateSliderModule {}
