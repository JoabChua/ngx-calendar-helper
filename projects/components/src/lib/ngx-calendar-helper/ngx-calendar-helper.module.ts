import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxCalendarHelperComponent } from './ngx-calendar-helper.component';

@NgModule({
  declarations: [NgxCalendarHelperComponent],
  imports: [CommonModule],
  exports: [NgxCalendarHelperComponent, CommonModule],
})
export class NgxCalendarHelperModule {}
