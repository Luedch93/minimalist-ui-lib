import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMinimalistUiComponent } from './ngx-minimalist-ui.component';

describe('NgxMinimalistUiComponent', () => {
  let component: NgxMinimalistUiComponent;
  let fixture: ComponentFixture<NgxMinimalistUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMinimalistUiComponent]
    });
    fixture = TestBed.createComponent(NgxMinimalistUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
