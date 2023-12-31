import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      (await import('./page/showcase/showcase.module')).ShowcaseModule,
  },
  {
    path: 'date-slider',
    loadChildren: async () =>
      (await import('./page/date-slider/date-slider.module')).DateSliderModule,
  },
  {
    path: 'checkbox-amount',
    loadChildren: async () =>
      (await import('./page/checkbox-amount/checkbox-amount.module'))
        .CheckboxAmountShowCaseModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
