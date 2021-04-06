import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookingServiceService } from '../booking-service.service';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.css']
})
export class ChangeProfileComponent implements OnInit {
  
  public firstName:string;
  public lastName:string;
  public phoneNumber:string;
  public password:string;
  public cpassword:string;
  public token: any;  
  public roleT: number;

  constructor(private ar: ActivatedRoute, private route: Router, private book:BookingServiceService, private auth:AuthService) { }
  

  
  ngOnInit(): void {
    this.token= this.auth.readToken();

    if(this.token.role=="customer")
    {
      this.roleT= 1;
    }
    else if(this.token.role=="Manager"){
      this.roleT=3;
    }
    else{
      this.roleT=2;
    }

    
  }

  onSubmit(f:NgForm):void{

    var newAC;
    console.log(this.roleT)
    if(this.roleT==1)
    {
      newAC={
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.token.email,
        phoneNumber: this.phoneNumber,
        password: this.password,
        cpassword:this.cpassword

      }

      this.book.updateCustomer(this.token._id,  newAC).subscribe(suc=>{

        console.log(suc);
        this.route.navigate(["/accountProfile", this.token._id]);
      })
    }

    else if(this.roleT==2)
    {
      newAC={
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.token.email,
        phoneNumber: this.phoneNumber

      }

      this.book.updateBarber(this.token._id,  newAC).subscribe(suc=>{

        console.log(suc);
        this.route.navigate(["/accountProfile", this.token._id]);
      })
    }

    else
    {
      newAC={
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.token.email,
        phoneNumber: this.phoneNumber

      }

      this.book.updateBarber(this.token._id,  newAC).subscribe(suc=>{

        console.log(suc);
        this.route.navigate(["/accountProfile", this.token._id]);
      })
    }

  }

}
