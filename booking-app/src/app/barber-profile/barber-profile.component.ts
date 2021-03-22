import { Component, OnInit } from '@angular/core';
import { Barber } from '../models/Barber'
import { ActivatedRoute, Data } from '@angular/router';
import { AppointmentService } from '../Services/appointment.service';

@Component({
  selector: 'app-barber-profile',
  templateUrl: './barber-profile.component.html',
  styleUrls: ['./barber-profile.component.css']
})
export class BarberProfileComponent implements OnInit {

  barber: Barber = new Barber();
  querySub: any;
  constructor(private data: AppointmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.data.getOneBarber(params['id']).subscribe(data => {        
        
          this.barber = data;         

  })
})

  }

}
