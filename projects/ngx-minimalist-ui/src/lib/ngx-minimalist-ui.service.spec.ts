import { TestBed } from '@angular/core/testing';

import { NgxMinimalistUiService } from './ngx-minimalist-ui.service';

describe('NgxMinimalistUiService', () => {
  let service: NgxMinimalistUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMinimalistUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
