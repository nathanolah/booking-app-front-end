import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarberShop } from '../BarberShop';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shops: Array<BarberShop>;
  page: number = 1;
  querySub: any;

  constructor(private book: BookingServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.querySub = this.route.queryParams.subscribe(params => {
      this.getPage(+params['page'] || 1);
    });

    //this.book.getBarberShops().subscribe(data=>{this.shops=data});

  }

  getPage(num: any) {
    this.book.getBarberShopsPage(num).subscribe(data => {
      if (data.length > 0) {
        this.shops = data;
        this.page = num;
      }
      
    });
  }

  rowClicked(e,id)
  {
    this.router.navigate(["/shopProfile", id])
  }

}
