
import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/Appointment';
import { AppointmentService } from '../Services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointments-for-day',
  templateUrl: './appointments-for-day.component.html',
  styleUrls: ['./appointments-for-day.component.css']
})
export class AppointmentsForDayComponent implements OnInit {

  appointments: Array<Appointment> | undefined;
  querySub: any;

  constructor(private data: AppointmentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.data.getBarberAppointmentsToday(params['id']).subscribe(data => {        
        
          this.appointments = data;         

  })
})
}

}
