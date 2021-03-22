import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../models/Appointment';
import { Barber } from '../models/Barber';

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

  bookAppointment(email: string, barberID: string, date: string){
    return this.http.post<any>(`https://groupone-booking-app.herokuapp.com/api/appointments/`, {email, barberID, date});
  }

  getOneBarber(id: any){
    return this.http.get<Barber>(`https://groupone-booking-app.herokuapp.com/api/barbers/${id}`)
  }

  getAllBarbers(){
    return this.http.get<Array<Appointment>>(`https://groupone-booking-app.herokuapp.com/api/barbers/`);
  }
}
