import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarberShop } from '../BarberShop';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-remove-barber-shop',
  templateUrl: './remove-barber-shop.component.html',
  styleUrls: ['./remove-barber-shop.component.css']
})
export class RemoveBarberShopComponent implements OnInit {
  shops: Array<BarberShop>;

  constructor(private book: BookingServiceService, private router: Router) { }

  ngOnInit(): void {
    this.book.getBarberShops().subscribe( data=>{
      this.shops = data;
    });
  }

  removeBarberShop(e, id): void {
    this.book.removeBarberShop(id).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }


}
