import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(public userser:UsersService , private navbarser : NavbarService){}
  email = faEnvelope ;
  ngOnInit(): void {
    this.navbarser.focus = 4 ;
  }
  
}
