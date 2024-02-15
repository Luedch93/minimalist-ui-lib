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

  handleNavigation(event: KeyboardEvent, idx: number) {
    let targetIdx = 0;
    if (event.code !== 'ArrowDown' && event.code !== 'ArrowUp') {
      return;
    }
    event.preventDefault();
    event.stopPropagation();

    const el = event.target as HTMLElement;
    const parentEl = el.closest('.minimalist-process-list');

    el.blur();
    if (event.code === 'ArrowUp') {
      if (idx === 0) {
        targetIdx = this.infoList.length - 1;
      } else {
        targetIdx = idx - 1;
      }
    }
    if (event.code === 'ArrowDown') {
      if (idx === this.infoList.length - 1) {
        targetIdx = 0;
      } else {
        targetIdx = idx + 1;
      }
    }

    const targetEl = parentEl?.querySelector(
      `#minimalist-item-${targetIdx}`
    ) as HTMLElement;
    targetEl.focus();
  }
}
