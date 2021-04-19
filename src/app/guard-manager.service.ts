import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class GuardManagerService implements CanActivate{

  constructor(private auth:AuthService, private router:Router) { }



  canActivate():boolean
  {

    if(!this.auth.isAuthenticated())
    {
      alert('Need to login first');

      this.router.navigate(['login-barber']);
      return false;


    }
    else{
      let token = this.auth.readToken();
      if(token.role == "Manager"){
        return true;
      
      }
      else{
        alert('You do not have access');

        this.router.navigate(['home']);
        return false;
      }
      

    }
  }
}
