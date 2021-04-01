import { Component, OnInit } from '@angular/core';
import {Customer} from '../Customer';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public customer:Customer;
  public warning:String;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.customer=new Customer;
  }

  onSubmit(f:NgForm):void{
    this.auth.login(this.customer).subscribe(
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
