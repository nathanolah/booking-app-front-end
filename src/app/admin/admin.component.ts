import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public ID : String;
  public password : String;

  constructor(private route: Router, private auth :AuthService, private book:BookingServiceService) { }

  ngOnInit(): void {
  }


  onSubmit(f:NgForm) :void {
    var data ={
      id :this.ID,
      password : this.password 
    }
    
    this.auth.loginAdmin(data).subscribe((success)=>{
        
      console.log(success.token);
      localStorage.setItem('access_token',success.token);
      this.route.navigate(['/home']);
    },
    (err) => 
    {
      console.log(err);
    } 

    // Admin
    // Tt123^^

    );

  }
}
