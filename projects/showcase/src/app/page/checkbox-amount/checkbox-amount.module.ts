import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxMinimalistCheckboxAmountModule } from 'ngx-minimalist-ui/checkbox-amount';
import { NgxMinimalistButtonModule } from 'ngx-minimalist-ui/button';

import { CheckboxAmountShowCaseRoutingModule } from './checkbox-amount-routing.module';
import { CheckboxAmountShowCase } from './checkbox-amount.component';

@NgModule({
  declarations: [CheckboxAmountShowCase],
  imports: [
    CommonModule,
    CheckboxAmountShowCaseRoutingModule,
    NgxMinimalistCheckboxAmountModule,
    NgxMinimalistButtonModule,
    ReactiveFormsModule,
  ],
})
export class CheckboxAmountShowCaseModule {}
