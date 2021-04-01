import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Barber } from '../Barber';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-barber-profile',
  templateUrl: './barber-profile.component.html',
  styleUrls: ['./barber-profile.component.css']
})
export class BarberProfileComponent implements OnInit {
  isManager:boolean;
  barber:Barber;
  public token:any;
  constructor(private book:BookingServiceService,private auth:AuthService, private route:Router, private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.aroute.snapshot.params['id'];
    this.book.getBarber(id).subscribe(data=>{
      
      this.barber=data;

      console.log(this.barber);
    })
    this.token=this.auth.readToken();
    if(this.token.role=="Manager")
    {
      this.isManager=true;
    }
  }
  clicked(e,id)
  {
    this.route.navigate(["/newReview", id])
  }

  updateSchedule(e,id)
  {
    
    this.route.navigate(['/editSchedule', id]);
  }
  
  deleteSchedule(e,id)
  {
    this.book.deleteSchedule(id).subscribe(res=>{
      alert(res);
    })
  }
}
