import { Component, Input } from '@angular/core';

import { SummaryList } from './types/ui-summary-list.type';

@Component({
  selector: 'lib-minimalist-summary',
  templateUrl: './summary.component.html',
})
export class NgxMinimalistSummaryComponent {
  @Input({ required: true }) summaryList!: SummaryList[];
  @Input() currencyCode: string = 'USD';

  get total(): number {
    return this.summaryList.reduce((total, next) => total + next.amount, 0);
  }
}
