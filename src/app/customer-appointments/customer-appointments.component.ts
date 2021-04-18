import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/Appointment';
import { AppointmentService } from '../Services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-appointments',
  templateUrl: './customer-appointments.component.html',
  styleUrls: ['./customer-appointments.component.css']
})
export class CustomerAppointmentsComponent implements OnInit {



  appointments: Array<Appointment> | undefined;
  querySub: any;

  constructor(private data: AppointmentService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.data.getCustomerAppointments(params['id']).subscribe(data => {        
        
          this.appointments = data;         

  })
})
}

rowClicked(e,id)
  {
    this.router.navigate(["/appointment", id])
  }

}
