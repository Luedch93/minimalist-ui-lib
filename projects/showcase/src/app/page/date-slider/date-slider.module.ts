import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMinimalistDateSliderModule } from 'ngx-minimalist-ui/date-slider';

import { DateSliderComponent } from './date-slider.component';
import { DateSliderRoutingModule } from './date-slider-routing.module';

@NgModule({
  declarations: [DateSliderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DateSliderRoutingModule,
    NgxMinimalistDateSliderModule,
  ],
})
export class DateSliderModule {}
