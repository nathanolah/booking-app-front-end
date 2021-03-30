import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingServiceService } from '../booking-service.service';
import { Review } from '../Review';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  reviews:Array<Review>
  constructor(@Inject(DOCUMENT) private doc:Document,
    private book:BookingServiceService, private route:Router) { }

  ngOnInit(): void {
    this.book.getReviews().subscribe(data=>{
      this.reviews=data;

      console.log(this.reviews);
    })
  }

  validate(e,id)
  {
    this.book.getReviewByID(id).subscribe(data=>
      {

        data.valid=true;
        console.log(data);
        this.book.updateReview(id,data).subscribe(sucess=>
          {
            alert(sucess);
            this.doc.defaultView.location.reload();
          });
      })
    
  }

  dismiss(e,id)
  {
   
      
        this.book.deleteReview(id).subscribe(sucess=>
          {
            alert(sucess);
            this.doc.defaultView.location.reload();
          });
     
    
  }

}
