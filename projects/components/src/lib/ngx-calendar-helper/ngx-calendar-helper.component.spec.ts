import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalendarHelperComponent } from './ngx-calendar-helper.component';

describe('NgxCalendarHelperComponent', () => {
  let component: NgxCalendarHelperComponent;
  let fixture: ComponentFixture<NgxCalendarHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCalendarHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCalendarHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
