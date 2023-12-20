import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
    this.navbarser.focus = 5 ;
  }

  @ViewChild("user") "user" :NgForm;
  constructor(public userser: UsersService ,private router:Router , private navbarser : NavbarService){}
  l= false;
  onSubmit(u:any){  
    this.userser.users.forEach( (us:any) => {
      if(us.email==u.email && us.password==u.password){
        localStorage.setItem('idlogin',us.id);
        this.userser.user1 = us;
        this.router.navigate(['/home']);
      }
    });
    this.l = true ;
    this.user.reset();
  }
  teste( e : any){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(e);
  } 
}
