import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxAmountShowCase } from './checkbox-amount.component';

const routes: Routes = [
  {
    component: CheckboxAmountShowCase,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxAmountShowCaseRoutingModule {}
