import { DOCUMENT } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart } from '@angular/router';
import { AuthService } from '../auth.service';
import { Barber } from '../Barber'
import { BarberShop } from '../BarberShop';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-shop-profile',
  templateUrl: './shop-profile.component.html',
  styleUrls: ['./shop-profile.component.css']
})
export class ShopProfileComponent implements OnInit {

  shop: BarberShop;
  barbers: Array<Barber>
  isManager: boolean;
  isAdmin:boolean;
  public address: String;
  public newAdd: string;
  constructor(@Inject(DOCUMENT) private doc: Document, private auth: AuthService, private book: BookingServiceService, private route: Router, private aroute: ActivatedRoute) { }

  public token: any;

  ngOnInit(): void {

    let id = this.aroute.snapshot.params['id'];

    this.book.getBarberShop(id).subscribe(data => {
      this.shop = data;
      this.barbers = data.barbers;
      console.log(data.barbers);
      this.address = this.shop.address;
      var add = this.address.split(" ");
      //this.newAdd=add.toString();
      var addressnew;

      addressnew = `https://maps.google.com/maps?q=${add}&t=&z=15&ie=UTF8&iwloc=&output=embed`



      this.doc.getElementById('gmap_canvas').setAttribute('src', addressnew);
      this.token = this.auth.readToken();

      if (this.token.role == "Manager" && this.token._id == this.shop.manager) {
        this.isManager = true;
      }
      if (this.token.role =="Admin")
      {
        this.isAdmin =true;
      }
    })


  }

  rowClicked(e, id) {
    this.route.navigate(["/barProf", this.shop._id, id])
  }

  Add(e, id) {
    this.route.navigate(["/addBarber", id]);
  }
  disable(e, id, shop) {
    this.book.updateManager(shop, id, false).subscribe(data => {
      alert(data);
      this.doc.defaultView.location.reload();
    })

  }

  enable(e, id, shop) {
    
    if (this.shop.manager == null) {



      this.book.updateManager(shop, id, true).subscribe(data => {
        alert(data);
        this.doc.defaultView.location.reload();
      })
    }
    else{
      alert('Shop can have only one manager.\nPlease disable current manager first')
    }
  }

}
