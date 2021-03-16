import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarbershopService } from '../Services/barbershop.service';
import { BarberShop } from '../models/BarberShop';
import { Barber } from '../models/Barber';
import { Customer } from '../models/Customer';


@Component({
  selector: 'app-shop-profile',
  templateUrl: './shop-profile.component.html',
  styleUrls: ['./shop-profile.component.css']
})
export class ShopProfileComponent implements OnInit {

  barberShop: BarberShop | undefined;
  querySub: any;
  barbers: Array<Barber> | undefined;
  
  // Queue Waiting List
  queueList: Array<Customer> | undefined;
  newCustomer: Customer = new Customer();

  queueFirstName: string = "";
  queueLastName: string = "";
  queueEmail: string = "";

  listFirstName: string = "";
  listLastName: string = "";
  listEmail: string = "";

  constructor(private data: BarbershopService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.querySub = this.route.params.subscribe(params => {

      // Barber Shop data
      this.data.getBarberShopById(params['id']).subscribe(data => {
        this.barberShop = data;
      });

      // Barber list
      this.data.getAllBarbersOfShop(params['id']).subscribe(data => {
        this.barbers = data;
      })

      // Waiting list
      this.data.getQueueList(params['id']).subscribe(data => {
          this.queueList = data;
      });
      
    });

  }

  // create the form module
  // add the person to the list in queue (barberShopqueue)
  // remove a person from the list
  
  enterQueue(): void {
    // get the data from the form and console log it
    this.newCustomer.firstName = this.listFirstName;

    this.querySub = this.route.params.subscribe(params => {
      this.data.addToQueue(params['id'] , this.newCustomer).subscribe(() => {
        this.router.navigate([`/shop-profile/${params['id']}`])
      });
    });
      

    


    // add user to queue
    // this.querySub = this.route.params.subscribe(params => {
    //   this.data.addToQueue(params['id']);
    // });

  }

  // ngOnDestroy() {
  //   if (this.querySub) {
  //     this.querySub.unsubcribe();
  //   }
  // }

}
