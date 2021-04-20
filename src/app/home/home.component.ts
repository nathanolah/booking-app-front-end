import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart } from '@angular/router';
import { BarberShop } from '../BarberShop';
import { BookingServiceService } from '../booking-service.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shops: Array<BarberShop>;
  page: number = 1;
  querySub: any;
  public token: any;
  isAdmin: boolean;

  constructor (
    private book: BookingServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
    ) { }

  ngOnInit(): void {

    // Query specific amount of shops for the list
    // this.querySub = this.route.queryParams.subscribe(params => {
    //   this.getPage(+params['page'] || 1);
    // });

    this.book.getBarberShops().subscribe(data => { 
      this.shops = data;
      this.token = this.auth.readToken();

      // Check if admin logged in
      if (this.token.role == "Admin") {
        this.isAdmin = true;
        console.log(this.isAdmin)
      }

    });
  }

  getPage(num: any) {
    this.book.getBarberShopsPage(num).subscribe(data => {
      if (data.length > 0) {
        this.shops = data;
        this.page = num;
      }
      
    });
  }

  rowClicked(e,id) {
    this.router.navigate(["/shopProfile", id])
  }


}
