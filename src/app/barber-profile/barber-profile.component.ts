import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Barber } from '../Barber';
import { BarberShop } from '../BarberShop';
import { DOCUMENT } from '@angular/common';

import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-barber-profile',
  templateUrl: './barber-profile.component.html',
  styleUrls: ['./barber-profile.component.css']
})
export class BarberProfileComponent implements OnInit {
  isManager:boolean;
  public shop: BarberShop;

  public barber:Barber;
  public token:any;
  constructor(@Inject(DOCUMENT) private doc:Document, private book:BookingServiceService,private auth:AuthService, private route:Router, private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.aroute.snapshot.params['id'];
    this.book.getBarber(id).subscribe(data=>{
      
      this.barber=data;

      
    })
    this.token=this.auth.readToken();
    let shop=this.aroute.snapshot.params['shop'];
    this.book.getBarberShop(shop).subscribe(data=>{
      if(this.token.role=="Manager" && (this.token._id == data.manager))
      {
        this.isManager=true;
      }
      this.shop =data;
    })
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
  
  newSchedule(e,shop,id)
  {
    this.route.navigate(['/addSchedule', shop,id])
  }
}
