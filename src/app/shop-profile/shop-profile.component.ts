import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart } from '@angular/router';
import { AuthService } from '../auth.service';
import { Barber } from '../Barber'
import { BarberShop } from '../BarberShop';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-shop-profile',
  templateUrl: './shop-profile.component.html',
  styleUrls: ['./shop-profile.component.css']
})
export class ShopProfileComponent implements OnInit {

  shop:BarberShop;
  barbers:Array<Barber>
  isManager:boolean;
  constructor(private auth:AuthService, private book:BookingServiceService, private route:Router, private aroute:ActivatedRoute) { }
  public token :any;
  ngOnInit(): void {
    
  
     
    let id=this.aroute.snapshot.params['id'];
    this.book.getBarberShop(id).subscribe(data=>{
      this.shop=data;
      this.barbers=data.barbers;

      console.log(this.shop);
      console.log(this.barbers);
    })

    this.token=this.auth.readToken();
    if(this.token.role=="Manager")
    {
      this.isManager=true;
    }
  }

  rowClicked(e,id)
  {
    this.route.navigate(["/barProf", id])
  }

  Add(e,id)
  {
    this.route.navigate(["/addBarber", id]);
  }
}
