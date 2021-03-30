import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Event, NavigationStart, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Barber } from '../Barber';
import { BookingServiceService } from '../booking-service.service';


@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  rating:Number;
  usercomment:String;
  authorID:string;
  barber:Barber;
  public token:any;
  constructor(private auth:AuthService, private router:Router, private book:BookingServiceService, private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.aroute.snapshot.params['id'];
    this.book.getBarber(id).subscribe(data=>{
      
      this.barber=data;

      
    })
    this.router.events.subscribe((event:Event)=>
    {
      if( event instanceof NavigationStart)
      {
        this.token=this.auth.readToken();
      }
      
      
    })
  }


  onSubmit(f:NgForm):void{
    this.token=this.auth.readToken();
   
    var newRev={
      ratings:this.rating,
      comments:this.usercomment,
      author:this.token._id
    }
    console.log(newRev.author);
    this.book.addReview(newRev, this.barber._id ).subscribe(res=>{
      alert(res);
      this.router.navigate([`/barProf/${this.barber._id}`]);
    });
  }
}
