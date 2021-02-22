import { Component, OnInit } from '@angular/core';
import { Barber } from '../barber'
import barberData from '../barberData.json'

@Component({
  selector: 'app-shop-profile',
  templateUrl: './shop-profile.component.html',
  styleUrls: ['./shop-profile.component.css']
})
export class ShopProfileComponent implements OnInit {

  barbers: Array<Barber> = barberData;
  constructor() { }

  ngOnInit(): void {
  }

}
