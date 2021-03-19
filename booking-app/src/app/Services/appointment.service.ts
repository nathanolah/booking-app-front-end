import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  getAllAppointments() {
    return this.http.get<Array<Appointment>>(`https://groupone-booking-app.herokuapp.com/api/appointments/`);
  }

  getBarberAppointments(id: any) {
    return this.http.get<Array<Appointment>>(`https://groupone-booking-app.herokuapp.com/api/appointments/barbAppointments/${id}`);
  }
}
