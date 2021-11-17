import { NgxCalendarHelperModule } from './../../../components/src/lib/ngx-calendar-helper/ngx-calendar-helper.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxCalendarHelperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
