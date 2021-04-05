import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart } from '@angular/router';
import { AuthService } from '../auth.service';
import { Barber } from '../Barber';
import { BookingServiceService } from '../booking-service.service';
import { Customer } from '../Customer';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.css']
})
export class AccountProfileComponent implements OnInit {
  public token :any;

  public cust :any;
  public bar = new Barber;
  public role :String;
  constructor(private book:BookingServiceService, private route:Router, private ar : ActivatedRoute, private auth:AuthService) { }

  ngOnInit(): void {
    
        this.token=this.auth.readToken();
      

      
   
    var id = this.ar.snapshot.params['id'];
    var roleT;
    if(this.token.role=="Manager" || this.token.role=="Barber")
    {
      roleT =2;

    }
    else{
      roleT=1;
    }
    if(roleT==1)
    {
    
      this.book.getCustomerByID(id).subscribe(data=> { this.cust=data;});
      this.role="Customer";
    }
    else{
    
      this.book.getBarber(id).subscribe(data=>{
        
        this.cust=data
        console.log(this.cust)
        if(this.cust.isManager)
        {
          this.role="Manager"
        }
        else{
          this.role="Barber"
        }
  
      
      })
     
    }
  }

  change(e,id)
  {
    this.route.navigate(["/changeProfile", id]);
  }
}
