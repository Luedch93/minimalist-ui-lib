import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxMinimalistButtonModule } from 'ngx-minimalist-ui';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [AppComponent, ContainerComponent],
  imports: [BrowserModule, AppRoutingModule, NgxMinimalistButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
