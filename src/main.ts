import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { CalendarComponent } from './app/calendar/calendar.component';
import { routes } from './app/app-routing.module'; // Import routes
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(CalendarComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
  ],
}).catch((err) => console.error(err));
