import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent  implements OnInit{
  ngOnInit(): void {
    this.navbarser.focus = 0 ;
  }
  constructor(private navbarser : NavbarService){}
}
