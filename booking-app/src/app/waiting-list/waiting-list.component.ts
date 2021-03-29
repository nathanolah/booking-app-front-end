import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, interval, Subscription } from 'rxjs';

import { Customer } from '../Customer';

import { BookingServiceService } from '../booking-service.service';


@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.css']
})
export class WaitingListComponent implements OnInit {
  clicked: string = "";  
  querySub: any;
  
  // Queue Waiting List
  queueList: Array<Customer> | undefined;
  newCustomer: Customer = new Customer();

  queueFirstName: string = "";
  queueLastName: string = "";
  queueEmail: string = "";

  page: number = 1;

  private updateSubscription: Subscription | undefined;


  constructor(private route: ActivatedRoute, private router: Router, private data: BookingServiceService) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
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



}
