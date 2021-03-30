import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public token :any;
  constructor(private router: Router,private auth:AuthService) { }

  ngOnInit(): void {
    this.router.events.subscribe((event:Event)=>
    {
      if( event instanceof NavigationStart)
      {
        this.token=this.auth.readToken();
      }

      console.log(this.token);
    })
  }

}
