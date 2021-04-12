import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Barber } from './Barber';
import { Review} from './Review';
import {Schedule} from './Schedule';
import { Customer } from './Customer';
import { BarberShop } from './BarberShop';

// https://groupone-booking-app.herokuapp.com/
@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(private http: HttpClient) {}

  //barber
  addBarber(id, data:any): Observable<any>{

    return this.http.post<any>(`https://lit-bastion-23590.herokuapp.com/api/barbers/${id}`, data);
  }

  getBarbers(): Observable<Barber[]>
  { 
    return this.http.get<Barber[]>(`https://groupone-booking-app.herokuapp.com/api/barbers`)
  }

  updateBarber(id, data:Barber):Observable<any>
  {
    return this.http.put<any>(`https://lit-bastion-23590.herokuapp.com/api/barbers/${id}`, data);
  }

  getBarber(id):Observable<Barber>
  {
    return this.http.get<Barber>(`https://lit-bastion-23590.herokuapp.com/api/barbers/${id}`);
  }

 
  //schedule
  getSchedule(id):Observable<Schedule>{
    return this.http.get<Schedule>(`https://lit-bastion-23590.herokuapp.com/api/schedules/${id}`);
  }

  updateSchedule(id, data:any):Observable<any>
  {
    return this.http.put<any>(`https://lit-bastion-23590.herokuapp.com/api/schedules/${id}`,data);
  }

  deleteSchedule(id):Observable<any>
  {
    return this.http.delete<any>(`https://lit-bastion-23590.herokuapp.com/api/schedules/${id}`);
  }


  //review
  getReviews():Observable<Review[]>
  {
    return this.http.get<Review[]>(`https://lit-bastion-23590.herokuapp.com/api/reviews`);
  }

  getReviewByID( id): Observable<Review> //not sure needed.
   {
      return this.http.get<Review>(`https://lit-bastion-23590.herokuapp.com/api/reviews/${id}`);

   }


  addReview(data: any, id: any):Observable<any>
  {
     return this.http.post<any>(`https://lit-bastion-23590.herokuapp.com/api/reviews/${id}`, data);
  }

  updateReview(id , data:any):Observable<any>
  {

    return this.http.put<any>(`https://lit-bastion-23590.herokuapp.com/api/reviews/${id}`,data);
  }

  deleteReview(id):Observable<any>
  {

    return this.http.delete<any>(`https://lit-bastion-23590.herokuapp.com/api/reviews/${id}`);
  }

  //customer
  addCustomer(data: any):Observable<any>
  {
     return this.http.post<any>(`https://groupone-booking-app.herokuapp.com/api/customers/`, data)
  }
  getCustomerByID(id):Observable<Customer>
  {
    return this.http.get<Customer>(`https://groupone-booking-app.herokuapp.com/api/customers/${id}`);
  }

  updateCustomer(id, newC: any):Observable<any>
  {
    return this.http.put<any>(`https://groupone-booking-app.herokuapp.com/api/customers/${id}`, newC);
  }
  //barbershop

  getBarberShops():Observable<BarberShop[]>{
    return this.http.get<BarberShop[]>(`https://lit-bastion-23590.herokuapp.com/api/barberShops`)
  }

  getBarberShop(id):Observable<BarberShop>{
    return this.http.get<BarberShop>(`https://groupone-booking-app.herokuapp.com/api/barberShops/${id}`)
  }

  getBarberShopsPage(page: any): Observable<BarberShop[]> {
    return this.http.get<BarberShop[]>(`https://groupone-booking-app.herokuapp.com/api/barberShops?page=${page}&perPage=${6}`);
  }

  /* Barber shop Waiting list */
  // Get waiting list
  getQueueList(id: any, page: any): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(`https://groupone-booking-app.herokuapp.com/api/barberShops/queue/${id}?page=${page}&perPage=${6}`);
  }

  // Add to waiting list
  addToQueue(id: string, data: Customer): Observable<any> {
    return this.http.post<any>(`https://groupone-booking-app.herokuapp.com/api/barberShops/queue/${id}`, data);
  }

  // Remove from waiting list
  removeFromQueue(id: string, data: Customer): Observable<any> {
    return this.http.put<any>(`https://groupone-booking-app.herokuapp.com/api/barberShops/queue/${id}`, data);
  }
  




  
  //appointment
  
  

  
   

   

   
   
   
   
}
