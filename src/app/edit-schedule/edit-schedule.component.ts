import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingServiceService } from '../booking-service.service';
import { Schedule } from '../Schedule';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent implements OnInit {

  public workingday:Number;
  public starting:String;
  public end:String;
  public warning:String;

  schedule:Schedule;
  constructor(private book:BookingServiceService, private route:Router, private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.aroute.snapshot.params['id'];
    this.book.getSchedule(id).subscribe(data=>{
      this.schedule=data;
      console.log(data);
    })
  }

  onSubmit(f:NgForm):void{
    console.log(this.schedule);
    var newSc={
      workDay:this.workingday,
      startTime:this.starting,
      endTime:this.end

    }
    console.log(newSc);

    this.book.updateSchedule(this.schedule._id, newSc).subscribe(res=>{
      alert(res);
      this.route.navigate(['/']);
    })


  }
}
