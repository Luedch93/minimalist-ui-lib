import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMinimalistButtonComponent } from './ngx-minimalist-button.component';

describe('NgxMinimalistButtonComponent', () => {
  let component: NgxMinimalistButtonComponent;
  let fixture: ComponentFixture<NgxMinimalistButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMinimalistButtonComponent]
    });
    fixture = TestBed.createComponent(NgxMinimalistButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
