import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMinimalistButtonModule } from 'ngx-minimalist-ui/button';
import { NgxMinimalistSummaryModule } from 'ngx-minimalist-ui/summary';
import { NgxMinimalistDateSliderModule } from 'ngx-minimalist-ui/date-slider';

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
    ShowcaseRoutingModule,
  ],
})
export class ShowcaseModule {}
