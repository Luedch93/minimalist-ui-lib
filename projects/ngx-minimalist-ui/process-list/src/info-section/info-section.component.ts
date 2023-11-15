import { Component, Input } from '@angular/core';
import { Info } from '../types/Info';

@Component({
  selector: 'lib-minimalist-info-section',
  templateUrl: './info-section.component.html',
})
export class InfoSectionComponent {
  @Input({ required: true }) info!: Info;
}
