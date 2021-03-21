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

  
  querySub: any;
  email: string = "";
  day: string = "";
  month: string ="";
  year: string = "";
  time: string = "";
  fullDate: string ="";
  

  constructor(private data: AppointmentService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    
 }

 public onSubmit():void{
  console.log(this.email + " " + this.day + " " + this.month + " " + this.year + " " + this.time);
  this.fullDate = this.year + " " + this.month + " " + this.day + " " + this.time;

  this.querySub = this.route.params.subscribe(params => {
  this.data.bookAppointment(this.email, params['id'], this.fullDate).subscribe(() =>{
    this.router.navigate([`home/`]);
  });
});  

 }
}
