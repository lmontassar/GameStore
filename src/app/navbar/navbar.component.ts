import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public userser: UsersService ,private router:Router , public navbarser : NavbarService ){}
  logout(){
    this.userser.user1=null;
    localStorage.removeItem('idlogin');
    this.router.navigate(['/login']);
  }
}
