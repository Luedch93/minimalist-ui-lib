import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxMinimalistUiModule } from 'ngx-minimalist-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxMinimalistUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
