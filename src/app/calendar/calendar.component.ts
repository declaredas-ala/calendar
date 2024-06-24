import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

interface Appointment {
  title: string;
  date: Date;
  time: string;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  fb = inject(FormBuilder);

  appointmentForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
  });

  appointments: Appointment[] = [];

  addAppointment() {
    if (this.appointmentForm.valid) {
      const newAppointment: Appointment = {
        title: this.appointmentForm.value.title,
        date: new Date(
          `${this.appointmentForm.value.date}T${this.appointmentForm.value.time}`
        ),
        time: this.appointmentForm.value.time,
      };
      this.appointments.push(newAppointment);
      this.appointmentForm.reset();
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }

  drop(event: CdkDragDrop<Appointment[]>) {
    moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
  }
}
