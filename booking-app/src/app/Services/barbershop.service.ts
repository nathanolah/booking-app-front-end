import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BarberShop } from '../models/BarberShop';
import { Barber } from '../models/Barber';

const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class BarbershopService {

  constructor(private http: HttpClient) { }

  getBarberShops(page: any): Observable<Array<BarberShop>> {
    return this.http.get<Array<BarberShop>>(`https://groupone-booking-app.herokuapp.com/api/barberShops?page=${page}&perPage=${perPage}`);
  }

  getAllBarberShops() {
    return this.http.get<Array<BarberShop>>(`https://groupone-booking-app.herokuapp.com/api/barberShops/`);
  }

  getBarberShopById(id: any) {
    return this.http.get<BarberShop>(`https://groupone-booking-app.herokuapp.com/api/barberShops/${id}`);
  }

  getBarberById(id: any) {
    return this.http.get<Barber>(`https://groupone-booking-app.herokuapp.com/api/barbers/${id}`);
  }


}
