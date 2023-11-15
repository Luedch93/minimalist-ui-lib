import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMinimalistSmallFigureModule } from 'ngx-minimalist-ui/small-figure';

import { ProcessListComponent } from './process-list.component';
import { InfoSectionModule } from './info-section/info-section.module';
import { NgxMinimalistListItemComponent } from './list-item/list-item.component';
import { NgxMinimalistIconSelectorComponent } from './icon-selector/icon-selector.component';

@NgModule({
  declarations: [
    ProcessListComponent,
    NgxMinimalistListItemComponent,
    NgxMinimalistIconSelectorComponent,
  ],
  imports: [CommonModule, InfoSectionModule, NgxMinimalistSmallFigureModule],
  exports: [ProcessListComponent],
})
export class ProcessListModule {}
