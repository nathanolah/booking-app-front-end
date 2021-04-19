import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public token :any;
  constructor(@Inject(DOCUMENT) private doc:Document, private router: Router,private auth:AuthService) { }

  ngOnInit(): void {
    
    this.router.events.subscribe((event:Event) => {

      if (event instanceof NavigationStart) {
        this.token=this.auth.readToken();
      }

      console.log(this.token);

    });

  }

  logout(e):void{
    console.log("clicked log out")
    this.auth.logout();
    this.doc.defaultView.location.reload();
  }
}
