import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/Appointment';
import { AppointmentService } from '../Services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment-by-barber',
  templateUrl: './appointment-by-barber.component.html',
  styleUrls: ['./appointment-by-barber.component.css']
})
export class AppointmentByBarberComponent implements OnInit {

  appointments: Array<Appointment> | undefined;
  querySub: any;

  constructor(private data: AppointmentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.data.getBarberAppointments(params['id']).subscribe(data => {        
        
          this.appointments = data;         

  })
})
}

}
