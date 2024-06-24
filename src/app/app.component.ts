import { Component } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-root',
  template: `<app-calendar></app-calendar>`,
  standalone: true,
  imports: [CalendarComponent], // Include CalendarComponent here
})
export class AppComponent {}
