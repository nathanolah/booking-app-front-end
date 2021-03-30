import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email:string;
  public firstName:string;
  public lastName:string;
  public password:string;
  public cpassword:string;
  public phoneNumber:string;

  public warning:String;
  constructor(private auth:AuthService, private router:Router, private book:BookingServiceService) { }

  ngOnInit(): void {
    
  }

  onSubmit(f:NgForm):void{
    var newCust={
      email:this.email,
      firstName:this.firstName,
      lastName:this.lastName,
      password:this.password,
      cpassword:this.cpassword,
      phoneNumber:this.phoneNumber
    };
    console.log(newCust);

    this.book.addCustomer(newCust).subscribe(res=>{

      this.email="";
      this.firstName="";
      this.lastName="";
      this.password="",
      this.cpassword="",
      this.phoneNumber="",

      alert(res);
    })

  }
}
