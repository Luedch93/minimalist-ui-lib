import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMinimalistButtonModule } from 'ngx-minimalist-ui/button';
import { NgxMinimalistSummaryModule } from 'ngx-minimalist-ui/summary';
import { NgxMinimalistDateSliderModule } from 'ngx-minimalist-ui/date-slider';
import { NgxMinimalistCheckboxAmountModule } from 'ngx-minimalist-ui/checkbox-amount';

import { ShowcaseComponent } from './showcase.component';
import { ContainerComponent } from '../../components/container/container.component';
import { ShowcaseRoutingModule } from './showcase-routing.module';

@NgModule({
  declarations: [ContainerComponent, ShowcaseComponent],
  imports: [
    CommonModule,
    NgxMinimalistButtonModule,
    NgxMinimalistSummaryModule,
    NgxMinimalistDateSliderModule,
    NgxMinimalistCheckboxAmountModule,
    ShowcaseRoutingModule,
  ],
})
export class ShowcaseModule {}