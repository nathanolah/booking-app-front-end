  
import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/Appointment';
import { AppointmentService } from '../Services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments: Array<Appointment> | undefined;
  

  constructor(private data: AppointmentService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.data.getAllAppointments().subscribe(data => {
      this.appointments = data;
    });

  }

}
