import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  NgxMinimalistButtonModule,
  NgxMinimalistSummaryModule,
} from 'ngx-minimalist-ui';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
