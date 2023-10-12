import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBar } from './progress-bar.component';

@NgModule({
  declarations: [ProgressBar],
  imports: [CommonModule],
  exports: [ProgressBar],
})
export class NgxProgressBarModule {}
