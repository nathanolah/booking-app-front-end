import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/Appointment';
import { AppointmentService } from '../Services/appointment.service';
import { ActivatedRoute, Router, NavigationStart, Event } from '@angular/router';
import { Barber } from '../models/Barber';
import { AuthService } from '../auth.service';

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
  availableTimes: Array<{timeValue: String; timeDis: string}> = [];
  appointmentsForDay: Array<Appointment> = [];
  public token :any;
  

  constructor(private data: AppointmentService, private route: ActivatedRoute, private router: Router, private auth:AuthService) {}

  ngOnInit(): void {
    this.token=this.auth.readToken();
    this.email = this.token.email;
    console.log(this.email);
    
      
   
    
    this.querySub = this.route.params.subscribe(params => {
      this.data.getOneBarber(params['id']).subscribe(data => {        
        
          this.barber = data;
          console.log(data.firstName);
                  

  })
})

 }

 public getAvailableTimes():void{this.querySub = this.route.params.subscribe(params => {
  this.data.getBarberAppointmentsTargetDay(params['id'], this.year, this.month, this.day).subscribe(data => {        
    
      this.appointmentsForDay = data;
                   


   let temp = new Date(+this.year, +this.month, +this.day);
   let dayStr = "";
   let startSchedule = null;
   let endSchedule = null;
    
   switch (temp.getDay()) {
    case 0:
      dayStr = "Sunday";
      break;
    case 1:
      dayStr = "Monday";
      break;
    case 2:
      dayStr = "Tuesday";
      break;
    case 3:
      dayStr = "Wednesday";
      break;
    case 4:
      dayStr = "Thursday";
      break;
    case 5:
      dayStr = "Friday";
      break;
    case 6:
      dayStr = "Saturday";
  }

  console.log(this.barber.schedules);
  for(let schedule of this.barber.schedules){
    console.log(schedule.workDate);
    if(dayStr === schedule.workDate){
      let startArr = schedule.startTime.split(":");
      let endArr = schedule.endTime.split(":");
      startSchedule = new Date(+this.year, +this.month, +this.day, +startArr[0], +startArr[1]);
      endSchedule = new Date(+this.year, +this.month, +this.day, +endArr[0], +endArr[1]);      
      break;
    }
  }

  let tempDate = new Date(startSchedule);
  //tempDate = new Date(tempDate.getTime() - Math.abs(tempDate.getTimezoneOffset()*-60000))
  let found = false;
  let tempHours = "";
  let tempMins = "";
  let compDate = new Date();

  while(tempDate.getTime() < endSchedule.getTime()){
    found = false;

    for(let appointment of this.appointmentsForDay){
      compDate = new Date (appointment.startDate);
      compDate = new Date (compDate.getTime())
      console.log(compDate);
      console.log(tempDate);
      if(tempDate.getTime() === compDate.getTime() ){
        found = true;
        break;
      }      
    }
    if(found == false){
      console.log("here");
      let tempValueDate = new Date(tempDate.getTime() + Math.abs(tempDate.getTimezoneOffset()*-60000))
      let tempHoursValue = String(tempValueDate.getHours());
      tempHours = String(tempDate.getHours());
      if(tempDate.getMinutes() === 0){
        tempMins = String(tempDate.getMinutes()) + "0";
      }else{
        tempMins = String(tempDate.getMinutes())
      }
      this.availableTimes.push({timeValue: tempHoursValue + " " + tempMins, timeDis: tempHours + ":" + tempMins });
    }
    tempDate.setMinutes(tempDate.getMinutes() + 45);
  }

  

  

})
})
 }

 public onSubmit():void{
   console.log(this.time);
  
  this.fullDate = this.year + " " + this.month + " " + this.day + " " + this.time;
  
  this.querySub = this.route.params.subscribe(params => {
  this.data.bookAppointment(this.email, params['id'], this.fullDate).subscribe(() =>{
    this.router.navigate([`/appointment-confirmation/${params['id']}`])
  });
});  

 }
}