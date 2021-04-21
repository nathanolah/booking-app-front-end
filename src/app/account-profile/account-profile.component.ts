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
  isCust:boolean;
  public cust :any;
  public bar = new Barber;
  public role :String;
  constructor(private book:BookingServiceService, private route:Router, private ar : ActivatedRoute, private auth:AuthService) { }

  ngOnInit(): void {
    
    this.token=this.auth.readToken();

    if(this.token.role == 'Admin')
    {
      alert('You are administrator');
      this.route.navigate(['home']);
    }
      
   
    var id = this.ar.snapshot.params['id'];
    var roleT;
    if(this.token.role=="Manager" || this.token.role=="Barber")
    {
      roleT =2;
      this.isCust=false;
    }
    else{
      roleT=1;
      this.isCust=true;
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

  delete(e,id)
  {
    this.book.deleteCustomer(id).subscribe(success=>{

      alert(success);
      this.auth.logout();
      this.route.navigate(['home']);
    })
  }
  
  reviews(e,id)
  {
    this.route.navigate(["review/",id]);
  }

}
