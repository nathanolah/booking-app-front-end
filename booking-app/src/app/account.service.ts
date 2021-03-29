import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})

class Login {
  email: string = "";
  password: string = "";
}

class Signup {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  cpassword: string = "";
}

export class AccountService {

  constructor(private http: HttpClient) { }


  /* GET METHODS */

  // Get all accounts
  getAllAccounts() {
    return this.http.get<Account>(`https://groupone-booking-app.herokuapp.com/api/accounts/`);
  }

  // Get account by id
  getAccountById(id: string): Observable<Account> {
    return this.http.get<Account>(`https://groupone-booking-app.herokuapp.com/api/accounts/profile/${id}`);
  }

  /* POST METHODS */

  // Login 
  accountLogin(data: Login): Observable<any> {
    return this.http.post<any>(`https://groupone-booking-app.herokuapp.com/api/accounts/login`, data);
  }

  // Signup
  accountSignUp(data: Signup): Observable<any> {
    return this.http.post<any>(`https://groupone-booking-app.herokuapp.com/api/accounts/signup`, data);
  }

  /* PUT METHOD */
  
  // Update account by id
  updateAccountById(id: string, data: Account): Observable<any> {
    return this.http.put<any>(`https://groupone-booking-app.herokuapp.com/api/accounts/update/${id}`, data);
  }

  /* DELETE METHOD */

  // Delete account by id
  deleteAccountById(id: string): Observable<any> {
    return this.http.delete<any>(`https://groupone-booking-app.herokuapp.com/api/accounts/${id}`);
  }

}
