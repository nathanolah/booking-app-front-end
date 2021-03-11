import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { BarbershopService } from '../Services/barbershop.service';
import { BarberShop } from '../models/BarberShop';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  barberShops: Array<BarberShop> | undefined;

  constructor(private data: BarbershopService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.data.getAllBarberShops().subscribe(data => {
      this.barberShops = data;
    });

  }

}
// CREATE A SERVICE THAT GET BARBER SHOP LIST
// POPULATE THE LIST IN HOME PAGE