# Angular Calendar Helper

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0. This is a simple calendar helper build to show events in month or year style.

## Screenshots

### Month Calendar:

![Month Cal](https://github.com/JoabChua/ngx-calendar-helper/tree/main/projects/components/src/assets/s1.png)

### Month Calendar - Event Selected:

![Month Cal with events](https://github.com/JoabChua/ngx-calendar-helper/tree/main/projects/components/src/assets/s2.png)

### Year Calendar:

![Year Cal](https://github.com/JoabChua/ngx-calendar-helper/tree/main/projects/components/src/assets/s3.png)

### Year Calendar - Event Selected:

![Year Cal with events](https://github.com/JoabChua/ngx-calendar-helper/tree/main/projects/components/src/assets/s4.png)

## Installation:

1. Download from npm:
   `npm install ngx-calendar-helper --save`
2. Import the `NgxCalendarHelperModule` module:
   `import {NgxCalendarHelperModule} from 'ngx-calendar-helper';`
3. Add `NgxCalendarHelperModule` to your module imports:

```ts
 @NgModule({ ... imports: [ ... NgxCalendarHelperModule ] })
```

## Usage

Put the ngx-calendar-helper component wherever you need it.

### Attributes (Input):

| Name              |       Type        | Default  |                            Description                             |
| ----------------- | :---------------: | :------: | :----------------------------------------------------------------: |
| calendarType      | `"month"\|"year"` | `"year"` |          The mode of the calender which will be displayed          |
| showToggleButtons |     `Boolean`     |   true   | Show or hide the default toggle button for month and year calendar |
