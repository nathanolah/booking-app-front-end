import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class GuardAdminService implements CanActivate{

  constructor(private auth:AuthService, private router:Router) { }

  canActivate():boolean{
    if(!this.auth.isAuthenticated())
    {
      alert('You are reaching unauthorized page');

      this.router.navigate(['home']);
      return false;


    }
    else{
      let token = this.auth.readToken();
      if(token.role == "Admin"){
        return true;
      
      }
      else{
        alert('You are reaching unauthorized page');

        this.router.navigate(['home']);
        return false;
      }
      

    }
    
  }
}
