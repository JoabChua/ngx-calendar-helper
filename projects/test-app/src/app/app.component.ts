import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  customCalendarType: 'month' | 'year' = 'month';
  cal = [
    {
      title: 'The Cleaning Day',
      date: '2021-01-10',
    },
    {
      title: 'The Cleaning Day',
      date: '2021-02-10',
    },
    {
      title: 'The Cleaning Day',
      date: '2021-03-17',
    },
    {
      title: 'The Cleaning Day',
      date: '2021-06-23',
    },
    {
      title: 'The Cleaning Day',
      date: '2021-08-18',
    },
    {
      title: 'The Cleaning Day',
      date: '2021-11-01',
    },
    {
      title: 'ABC Celebration Day',
      date: '2021-11-01',
    },
    {
      title: 'Testing Global Check',
      date: '20121-11-01',
    },
    {
      title: 'Polish Refueling Day',
      date: '2021-11-10',
    },
    { title: 'Polish Blooming 2019 - 2020', date: '2021-10-21' },
    { title: 'Polish Blooming 2019 - 2020', date: '2021-10-01' },
    { title: 'Polish Retro Day', date: '2021-12-27' },
    { title: 'ABC Testing on Land EDF', date: '2021-12-02' },
    { title: 'POP Fitting Day', date: '2021-12-17' },
  ];
}
