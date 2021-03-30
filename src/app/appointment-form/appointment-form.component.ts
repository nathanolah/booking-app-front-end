import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/Appointment';
import { AppointmentService } from '../Services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Barber } from '../models/Barber';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  barber: Barber = new Barber();
  querySub: any;
  email: string = "";
  day: string = "";
  month: string ="";
  year: string = "";
  time: string = "";
  fullDate: string ="";
  

  constructor(private data: AppointmentService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.data.getOneBarber(params['id']).subscribe(data => {        
        
          this.barber.firstName = data.firstName;
          console.log(data.firstName);
                  

  })
})

 }

 public onSubmit():void{
  
  this.fullDate = this.year + " " + this.month + " " + this.day + " " + this.time;
  
  this.querySub = this.route.params.subscribe(params => {
  this.data.bookAppointment(this.email, params['id'], this.fullDate).subscribe(() =>{
    this.router.navigate([`/appointment-confirmation/${params['id']}`])
  });
});  

 }
}
