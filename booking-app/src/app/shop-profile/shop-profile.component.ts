import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarbershopService } from '../Services/barbershop.service';
import { BarberShop } from '../models/BarberShop';
import { Barber } from '../models/Barber';

@Component({
  selector: 'app-shop-profile',
  templateUrl: './shop-profile.component.html',
  styleUrls: ['./shop-profile.component.css']
})
export class ShopProfileComponent implements OnInit {

  barberShop: BarberShop | undefined;
  barber: Barber | undefined;
  querySub: any;

  constructor(private data: BarbershopService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.data.getBarberShopById(params['id']).subscribe(data => {
          this.barberShop = data;

          

      })
    })

  }

  // ngOnDestroy() {
  //   if (this.querySub) {
  //     this.querySub.unsubcribe();
  //   }
  // }

}
