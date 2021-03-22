import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { CustomerService } from '../Services/customer.service';
import { Customer } from '../models/Customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customer: Customer | undefined;
  querySub: any;

  constructor(private data: CustomerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.data.getOneCustomer(params['id']).subscribe(data => {        
        
          this.customer = data;         

  })
})


}

}
