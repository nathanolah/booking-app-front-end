import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BarberShop } from '../models/BarberShop';


@Injectable({
  providedIn: 'root'
})
export class BarbershopService {

  constructor(private http: HttpClient) { }

  getAllBarberShops() {
    return this.http.get<Array<BarberShop>>(`https://groupone-booking-app.herokuapp.com/api/barberShops/`);
  }


}
