import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMinimalistSummaryComponent } from './ngx-minimalist-summary.component';

describe('NgxMinimalistSummaryComponent', () => {
  let component: NgxMinimalistSummaryComponent;
  let fixture: ComponentFixture<NgxMinimalistSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMinimalistSummaryComponent]
    });
    fixture = TestBed.createComponent(NgxMinimalistSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
