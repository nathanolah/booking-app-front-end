import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarberShop } from '../BarberShop';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shops: Array<BarberShop>;

  constructor(private book:BookingServiceService, private router:Router) { }

  ngOnInit(): void {
    this.book.getBarberShops().subscribe(data=>{this.shops=data});
  }

  rowClicked(e,id)
  {
    this.router.navigate(["/shopProfile", id])
  }

}
