import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  r = 0 ;
  constructor(private router : Router , private userser : UsersService , private navbarser : NavbarService){}
  ngOnInit(): void {
    this.navbarser.focus = 2 ;
    if(localStorage.getItem('idlogin') === null ){
      this.router.navigate(['/login']);
    }
    if( this.userser.user1.admin != true ){
      this.router.navigate(['/not-found']); 
    }
  }
}
