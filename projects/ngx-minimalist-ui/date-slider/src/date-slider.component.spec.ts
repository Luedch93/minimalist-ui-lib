import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSliderComponent } from './date-slider.component';

describe('DateSliderComponent', () => {
  let component: DateSliderComponent;
  let fixture: ComponentFixture<DateSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateSliderComponent]
    });
    fixture = TestBed.createComponent(DateSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
