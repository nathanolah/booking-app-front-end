import { Input, Output,Component, OnInit } from '@angular/core';
import { Barber } from '../Barber';
import { BookingServiceService } from '../booking-service.service';
import {Schedule} from'../Schedule';
import {Review} from'../Review';
@Component({
  selector: 'app-barber-list',
  templateUrl: './barber-list.component.html',
  styleUrls: ['./barber-list.component.css']
})
export class BarberListComponent implements OnInit {

  Barbers: Array<Barber>;
  Reviews : Array<Review>;
  constructor(private booking:BookingServiceService) { }

  ngOnInit(): void {
    this.booking.getBarbers().subscribe(data=>{
      this.Barbers=data;
      
     

      

    });
  }

}
