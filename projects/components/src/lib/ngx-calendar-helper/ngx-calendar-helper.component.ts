import { Component, Input, OnInit } from '@angular/core';
import {
  CalendarMonths,
  MonthCalendarDay,
  YearCalendarDay,
} from './ngx-calendar-helper.config';
import * as moment from 'moment';

@Component({
  selector: 'ngx-calendar-helper',
  templateUrl: './ngx-calendar-helper.component.html',
  styleUrls: ['./ngx-calendar-helper.component.scss'],
})
export class NgxCalendarHelperComponent implements OnInit {
  @Input() calendarEvents: CalendarEvent[] = [];
  @Input() calendarType: 'month' | 'year' = 'month';
  @Input() showToggleButtons: true | false = true;

  monthBool = true;
  today!: string;
  firstDay!: number;
  currentMonth!: number;
  currentYear!: number;
  custDate = 1;
  monthArr: any = [];
  monthTempArr: any[] = [];
  months = CalendarMonths;
  days = MonthCalendarDay;
  yDays = YearCalendarDay;
  yearArr: any[] = [];
  selectedDay!: number | null;
  selectedMth!: number | null;
  daySelected!: number;

  ngOnInit() {
    const today = new Date();
    this.today = moment().format('YYYY-MM-DD');
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.showMonthCalendar(this.currentMonth, this.currentYear);
    this.showYearCalendar();
  }
  daysInMonth(iMonth: number, iYear: number) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

  showCalendar(month: number, year: number) {
    this.monthTempArr = [];
    this.firstDay = new Date(year, month).getDay();
    for (let i = 0; i < 6; i++) {
      const dayInWeek = [];
      for (let j = 0; j < 7; j++) {
        if (
          (i === 0 && j < this.firstDay) ||
          this.custDate > this.daysInMonth(month, year)
        ) {
          dayInWeek.push({
            index: '',
            fullDate: '',
          });
        } else {
          if (month < 9 && this.custDate < 10) {
            dayInWeek.push({
              index: this.custDate,
              fullDate: `${year}-0${month + 1}-0${this.custDate}`,
              event: [],
            });
          } else if (month > 9 && this.custDate < 10) {
            dayInWeek.push({
              index: this.custDate,
              fullDate: `${year}-${month + 1}-0${this.custDate}`,
              event: [],
            });
          } else if (month < 9 && this.custDate >= 10) {
            dayInWeek.push({
              index: this.custDate,
              fullDate: `${year}-0${month + 1}-${this.custDate}`,
              event: [],
            });
          } else {
            dayInWeek.push({
              index: this.custDate,
              fullDate: `${year}-${month + 1}-${this.custDate}`,
              event: [],
            });
          }
          this.custDate++;
        }
      }
      this.monthTempArr.push(dayInWeek);
    }
    this.custDate = 1;
    return this.monthTempArr;
  }

  showMonthCalendar(month: number, year: number) {
    this.monthArr = [];
    this.monthArr = this.showCalendar(month, year);
    this.setEventsIntoMonthCalendar();
  }

  setEventsIntoMonthCalendar() {
    for (let k = 0; k < this.calendarEvents.length; k++) {
      for (let i = 0; i < this.monthArr.length; i++) {
        const index = this.monthArr[i].findIndex(
          (ele: any) => ele.fullDate === this.calendarEvents[k].date
        );
        if (index !== -1) {
          this.monthArr[i][index].event.push(this.calendarEvents[k].title);
        }
      }
    }
  }

  prevMonth() {
    this.selectedDay = null;
    this.currentYear =
      this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;
    this.currentMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
    this.showMonthCalendar(this.currentMonth, this.currentYear);
  }

  nextMonth() {
    this.selectedDay = null;
    this.currentYear =
      this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear;
    this.currentMonth = (this.currentMonth + 1) % 12;
    this.showMonthCalendar(this.currentMonth, this.currentYear);
  }

  prevYear() {
    this.selectedDay = null;
    this.currentYear = this.currentYear - 1;
    this.showYearCalendar();
  }

  nextYear() {
    this.selectedDay = null;
    this.currentYear = this.currentYear + 1;
    this.showYearCalendar();
  }

  showYearCalendar() {
    this.yearArr = [];
    for (let k = 0; k < 12; k++) {
      let tempMonth = this.showCalendar(k, this.currentYear);
      tempMonth = this.setEventsIntoYearCalendar(tempMonth);
      this.yearArr.push(tempMonth);
    }
  }

  setEventsIntoYearCalendar(month: any[]) {
    for (let k = 0; k < this.calendarEvents.length; k++) {
      for (let i = 0; i < month.length; i++) {
        const index = month[i].findIndex(
          (ele: any) => ele.fullDate === this.calendarEvents[k].date
        );
        if (index !== -1) {
          month[i][index].event.push(this.calendarEvents[k].title);
        }
      }
    }
    return month;
  }

  viewEvent(wkOfMth: number, dayOfWk: number) {
    this.daySelected = dayOfWk;
    if (this.selectedDay === wkOfMth) {
      this.selectedDay = null;
    } else {
      this.selectedDay = wkOfMth;
    }
  }

  viewEventYear(wkOfMth: number, dayOfWk: number, mthOfYr: number) {
    this.daySelected = dayOfWk;
    this.selectedMth = mthOfYr;
    if (this.selectedDay === wkOfMth) {
      this.selectedDay = null;
    } else {
      this.selectedDay = wkOfMth;
    }
  }
}

interface CalendarEvent {
  title: string;
  date: string;
}
