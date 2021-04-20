import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/Appointment';
import { AppointmentService } from '../Services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointment: Appointment | undefined;
  querySub: any;

  constructor(private data: AppointmentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.data.getOneAppointment(params['id']).subscribe(data => {        
        
          this.appointment = data;         

  })
})


}

public deleteApt(e):void{
  this.querySub = this.route.params.subscribe(params => {
    this.data.deleteAppointment(params['id']).subscribe(() => {        
      
        console.log("Deleted successfully");
        this.router.navigate(["/home"])         

})
})
}

}
