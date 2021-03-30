import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BarberShop } from '../BarberShop';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-add-barber',
  templateUrl: './add-barber.component.html',
  styleUrls: ['./add-barber.component.css']
})
export class AddBarberComponent implements OnInit {

  public email:string;
  public firstName:string;
  public lastName:string;
  public password:string;
  public cpassword:string;
  public phoneNumber:string;

  public warning:String;
  shop:BarberShop;

  constructor(private book:BookingServiceService, private route:Router, private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.aroute.snapshot.params['id'];
    this.book.getBarberShop(id).subscribe(data=>{
      this.shop=data;
    })
  }

  onSubmit(f:NgForm):void{
    var barber={
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      phoneNumber:this.phoneNumber,
      password:this.password,
      cpassword:this.cpassword
    };

    this.book.addBarber(this.shop._id,barber).subscribe(res=>{
      alert(res);
      this.route.navigate([`/shopProfile/${this.shop._id}`]);});
  }
}
