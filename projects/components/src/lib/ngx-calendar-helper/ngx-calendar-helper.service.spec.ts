import { TestBed } from '@angular/core/testing';

import { NgxCalendarHelperService } from './ngx-calendar-helper.service';

describe('NgxCalendarHelperService', () => {
  let service: NgxCalendarHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCalendarHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
