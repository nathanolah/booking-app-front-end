import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Barber } from '../Barber';

@Component({
  selector: 'app-login-barber',
  templateUrl: './login-barber.component.html',
  styleUrls: ['./login-barber.component.css']
})
export class LoginBarberComponent implements OnInit {

  public barber:Barber;
  public warning:String;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.barber=new Barber;
  }

  onSubmit(f:NgForm):void{
    this.auth.loginBar(this.barber).subscribe(
      (success)=>{
        
        console.log(success.token);
        localStorage.setItem('access_token',success.token);
        this.router.navigate(['/home']);
      },
      (err)=>
      {
        this.warning=err.error.message;
        
      }


    );


  }

}
