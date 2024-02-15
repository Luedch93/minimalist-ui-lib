import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar.component';
import { SearchIconComponent } from './search-icon/search-icon.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchBarComponent, SearchIconComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
