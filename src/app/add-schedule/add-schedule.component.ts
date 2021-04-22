import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Barber } from '../Barber';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  public workingday:Number;
  public starting:String;
  public end:String;
  public warning:String;
  public barber:Barber;
  
  constructor(private book:BookingServiceService, private route:Router, private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.aroute.snapshot.params['id'];
    this.book.getBarber(id).subscribe(data=>{
      this.barber =data;
    })
  }

  onSubmit(f:NgForm):void{
    
    var newSc={
      workDay:this.workingday,
      startTime:this.starting,
      endTime:this.end

    }
    console.log(newSc);

    this.book.addSchedule(newSc,this.barber._id).subscribe(res=>{
      alert(res);

      let id = this.aroute.snapshot.params['shop'];


      this.route.navigate(['/barProf',id, this.barber._id]);
    })


  }
}
