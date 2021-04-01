import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomer() {
    return this.http.get<Array<Customer>>(`https://groupone-booking-app.herokuapp.com/api/customers/`);
  }
  getOneCustomer(id: any){
    return this.http.get<Customer>(`https://groupone-booking-app.herokuapp.com/api/customers/${id}`)
  }
}
