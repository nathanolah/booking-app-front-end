import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/Appointment';
import { AppointmentService } from '../Services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Barber } from '../models/Barber';

@Component({
  selector: 'app-appointment-confirmation',
  templateUrl: './appointment-confirmation.component.html',
  styleUrls: ['./appointment-confirmation.component.css']
})
export class AppointmentConfirmationComponent implements OnInit {

  barber: Barber = new Barber();
  querySub: any;
  constructor(private data: AppointmentService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.data.getOneBarber(params['id']).subscribe(data => {        
        
          this.barber.firstName = data.firstName;
          console.log(data.firstName);
                  

  })
})

  }}
