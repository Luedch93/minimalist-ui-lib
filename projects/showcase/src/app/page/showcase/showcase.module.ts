import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMinimalistButtonModule } from 'ngx-minimalist-ui/button';
import { NgxMinimalistSummaryModule } from 'ngx-minimalist-ui/summary';
import { NgxMinimalistDateSliderModule } from 'ngx-minimalist-ui/date-slider';
import { NgxMinimalistCardModule } from 'ngx-minimalist-ui/card';
import { NgxMinimalistCheckboxAmountModule } from 'ngx-minimalist-ui/checkbox-amount';
import { NgxProgressBarModule } from 'ngx-minimalist-ui/progress-bar';
import { NgxMinimalistAlertModule } from 'ngx-minimalist-ui/alert';
import { NgxMinimalistNavButtonModule } from 'ngx-minimalist-ui/nav-button';

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
    NgxMinimalistCardModule,
    NgxMinimalistCheckboxAmountModule,
    NgxProgressBarModule,
    NgxMinimalistAlertModule,
    NgxMinimalistNavButtonModule,
    ShowcaseRoutingModule,
  ],
})
export class ShowcaseModule {}
