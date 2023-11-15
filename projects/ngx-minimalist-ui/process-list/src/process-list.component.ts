import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Info } from './types/Info';

@Component({
  selector: 'lib-minimalist-process-list',
  templateUrl: './process-list.component.html',
})
export class ProcessListComponent implements OnInit {
  @Input({ required: true }) infoList: Info[] = [];
  @Input({ required: false }) initialSelectedIndex: number | undefined;
  @Output() itemSelected = new EventEmitter<Info>();
  idxSelected: number | null = null;

  ngOnInit(): void {
    if (this.initialSelectedIndex !== undefined) {
      this.idxSelected = this.initialSelectedIndex;
    }
  }

  onItemClick(idx: number) {
    this.idxSelected = idx;
    this.itemSelected.emit(this.infoList[idx]);
  }

  trackByIndex(idx: number) {
    return idx;
  }
}
