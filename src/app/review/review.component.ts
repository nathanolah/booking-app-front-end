import { DOCUMENT } from '@angular/common';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingServiceService } from '../booking-service.service';
import { Customer } from '../Customer';
import { Review } from '../Review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public reviews : Array<Review>
  public customer:Customer
  constructor(@Inject(DOCUMENT) private doc : Document,  private aroute :ActivatedRoute, private route : Router, private book :BookingServiceService) { }

  ngOnInit(): void {
    let id = this.aroute.snapshot.params['id'];
    
    this.book.getCustomerByID(id).subscribe(data=>{

      this.customer=data;

      
    })
    
    this.book.getReviewsByAuthor(id).subscribe(data=>
      {
        
        this.reviews = data;
        console.log(this.reviews)
      })
    

  }

  delete(e,id)
  {
    this.book.deleteReview(id).subscribe(success=>{
      alert(success);
      this.doc.defaultView.location.reload();
    })
  }
}
