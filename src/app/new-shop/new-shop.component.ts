import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BookingServiceService } from '../booking-service.service';

import { BarberShop } from '../BarberShop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.css']
})
export class NewShopComponent implements OnInit {

  public barberShop: BarberShop;

  constructor(private data: BookingServiceService, private router: Router) { }

  ngOnInit(): void {
    this.barberShop = new BarberShop;
  }

  onSubmit(f:NgForm): void {
    this.data.addBarberShop(this.barberShop).subscribe(() => {
      this.router.navigate(['/home']);
    })
    console.log('submitted ' + this.barberShop.barberShopName);
  }

}
