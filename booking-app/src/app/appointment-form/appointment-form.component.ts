import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/Appointment';
import { AppointmentService } from '../Services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  appointments: Array<Appointment> | undefined;
  querySub: any;

  constructor(private data: AppointmentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.data.getBarberAppointments(params['id']).subscribe(data => {        
        
          this.appointments = data;         

  })
})
}}
