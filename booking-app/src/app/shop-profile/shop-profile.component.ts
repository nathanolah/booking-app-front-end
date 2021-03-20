import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, interval, Subscription } from 'rxjs'; 

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
  clicked: string = "";

  barberShop: BarberShop | undefined;
  querySub: any;
  barbers: Array<Barber> | undefined;
  
  // Queue Waiting List
  queueList: Array<Customer> | undefined;
  newCustomer: Customer = new Customer();

  queueFirstName: string = "";
  queueLastName: string = "";
  queueEmail: string = "";

  page: number = 1;




  // listFirstName: string = "";
  // listLastName: string = "";
  // listEmail: string = "";

  private updateSubscription: Subscription | undefined;
  
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
      // this.data.getQueueList(params['id']).subscribe(data => {
      //     this.queueList = data;
      // });

      // Auto refresh page
      this.updateSubscription = interval(1200).subscribe(() => {
        this.updateQueueList(params['id'], +params['page'] || 1);
      });
      
    });

  }

  // Updates list after auto refresh
  updateQueueList(id: string, num: any): any {
      this.data.getQueueList(id, num).subscribe(data => {
        this.queueList = data;
        this.page = num;
      });
  }


  public onSubmit(): void {
    if (this.clicked === "enterQueue") {
      this.newCustomer.firstName = this.queueFirstName;
      this.newCustomer.lastName = this.queueLastName;
      this.newCustomer.email = this.queueEmail;
  
      console.log("testing: " + this.newCustomer.firstName + " "  + this.newCustomer.lastName + " " + this.newCustomer.email )
  
      this.querySub = this.route.params.subscribe(params => {
        this.data.addToQueue(params['id'] , this.newCustomer).subscribe(() => {
          this.router.navigate([`/shop-profile/${params['id']}`])
        });
      });
        
      this.queueFirstName = "";
      this.queueLastName = "";
      this.queueEmail = "";

      this.clicked = "";
    }

    if (this.clicked === "leaveQueue") {

      this.newCustomer.firstName = this.queueFirstName;
      this.newCustomer.lastName = this.queueLastName;
      this.newCustomer.email = this.queueEmail;

      this.querySub = this.route.params.subscribe(params => {
        this.data.removeFromQueue(params['id'] , this.newCustomer).subscribe(() => {
          this.router.navigate([`/shop-profile/${params['id']}`])
        });
      });

      this.queueFirstName = "";
      this.queueLastName = "";
      this.queueEmail = ""

      this.clicked = "";
    }

  }

  public onEnterClick() { this.clicked = "enterQueue"; } 
  public onLeaveClick() { this.clicked = "leaveQueue"; }

  // remove person from list
  // pagination on list

  // ngOnDestroy() {
  //   if (this.querySub) {
  //     this.querySub.unsubcribe();
  //   }
  // }

}
