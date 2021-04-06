import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';
import {Customer} from './Customer';
import { Barber } from './Barber';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private jwtHelper:JwtHelperService) { }

  public getToken():string{
    return localStorage.getItem('access_token');
  }

  public readToken(): any{
    const token=localStorage.getItem('access_token');
    return this.jwtHelper.decodeToken(token);
  }

  logout():any{
    localStorage.removeItem('access_token');

  }

  isAuthenticated():boolean{
    const token=localStorage.getItem('access_token');

    if(token){
      return true;
    }
    else{
      return false;
    }
  }

  login(customer: Customer):Observable<any>{
    //return this.http.post<any>('http://localhost:8080/api/customers/login', customer);
    return this.http.post<any>('https://groupone-booking-app.herokuapp.com/api/customers/login', customer);
  }
  loginBar(bar:Barber):Observable<any>{
    //return this.http.post<any>('http://localhost:8080/api/customers/login', customer);
    return this.http.post<any>('https://groupone-booking-app.herokuapp.com/api/barbers/login', bar);
  }
}
