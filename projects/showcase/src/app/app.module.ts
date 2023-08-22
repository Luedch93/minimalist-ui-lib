import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxMinimalistButtonModule } from 'ngx-minimalist-ui/button';
import { NgxMinimalistSummaryModule } from 'ngx-minimalist-ui/summary';
import { DateSliderModule } from 'ngx-minimalist-ui/date-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [AppComponent, ContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMinimalistButtonModule,
    NgxMinimalistSummaryModule,
    DateSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
