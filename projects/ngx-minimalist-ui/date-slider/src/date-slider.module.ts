import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateSliderComponent } from './date-slider.component';
import { SliderDirective } from './directives';

@NgModule({
  declarations: [DateSliderComponent, SliderDirective],
  imports: [CommonModule],
  exports: [DateSliderComponent, SliderDirective],
})
export class DateSliderModule {}
