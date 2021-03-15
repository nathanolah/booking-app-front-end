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
  page: number = 1;
  querySub: any;

  constructor(private data: BarbershopService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.querySub = this.route.queryParams.subscribe(params => {
      this.getPage(+params['page'] || 1);
    })

    // this.data.getAllBarberShops().subscribe(data => {
    //   this.barberShops = data;
    // });

  }

  getPage(num: any) {
    this.data.getBarberShops(num).subscribe(data => {
      if (data.length > 0) {
        this.barberShops = data;
        this.page = num;
      }
    });

  }

  ngOnDestroy() {
    if (this.querySub) {
      this.querySub.unsubscribe();
    }
  }


}