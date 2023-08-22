import { Injectable } from '@angular/core';

import moment from 'moment';

import { DateSliderItem } from '../types';

@Injectable()
export class FormatService {
  generateSliderDates(date: Date | string): DateSliderItem[] {
    const dates = this.generateDates(date);

    return dates.map((momentDate: moment.Moment) => ({
      date: momentDate.format('DD'),
      day: momentDate.format('ddd'),
    }));
  }

  private generateDates(argDate: Date | string): moment.Moment[] {
    let initialDate = moment(argDate).subtract({ days: 3 });
    let result = [];

    for (let i = 0; i < 5; i++) {
      result.push(moment(initialDate).add({ days: i + 1 }));
    }

    return result;
  }
}
