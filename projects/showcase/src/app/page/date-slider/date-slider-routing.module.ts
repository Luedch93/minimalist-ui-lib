import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateSliderComponent } from './date-slider.component';

const routes: Routes = [
  {
    path: '',
    component: DateSliderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateSliderRoutingModule {}
