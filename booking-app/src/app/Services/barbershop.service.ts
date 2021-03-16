import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BarberShop } from '../models/BarberShop';
import { Barber } from '../models/Barber';
import { Customer } from '../models/Customer';

const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class BarbershopService {

  constructor(private http: HttpClient) { }

  getBarberShops(page: any): Observable<Array<BarberShop>> {
    return this.http.get<Array<BarberShop>>(`https://groupone-booking-app.herokuapp.com/api/barberShops?page=${page}&perPage=${perPage}`);
  }

  getAllBarberShops(): Observable<Array<BarberShop>> {
    return this.http.get<Array<BarberShop>>(`https://groupone-booking-app.herokuapp.com/api/barberShops/`);
  }

  getBarberShopById(id: any): Observable<BarberShop> {
    return this.http.get<BarberShop>(`https://groupone-booking-app.herokuapp.com/api/barberShops/${id}`);
  }

  getAllBarbersOfShop(id: any): Observable<Array<Barber>> {
    return this.http.get<Array<Barber>>(`https://groupone-booking-app.herokuapp.com/api/barberShops/barbers/${id}`);
  }


  // Get waiting list
  getQueueList(id: any): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(`https://groupone-booking-app.herokuapp.com/api/barberShops/queue/${id}`);
  }

  // Add to waiting list
  addToQueue(id: string, data: Customer): Observable<any> {
    return this.http.post<any>(`https://groupone-booking-app.herokuapp.com/api/barberShops/queue/${id}`, data);
  }

  // Remove from waiting list



}
