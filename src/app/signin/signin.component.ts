import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';
import { enableDebugTools } from '@angular/platform-browser';
import { DefaultTitleStrategy, Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  ngOnInit(): void {
    this.navbarser.focus = 6 ;
  }

  newuser = new User();
  re_pass = "" ;
  email_exist = false;
  @ViewChild('user') 'user':NgForm ;
  OnSubmit(u: any){
    u.id = Date.now();
    u.admin = false;
    delete u.repass;
    const i = this._userSer.users.findIndex(user=> user.email == u.email);
    if( i >= 0 ){
      this.email_exist = true;
      setTimeout(
        ()=>{
          this.email_exist = false
        } , 15000
      );
      this.user.value.email = "";
    }else{
      this._userSer.users.push(u);
      console.log(this._userSer.users);
      this.router.navigate(['/login']);
    }
  }
  constructor( public _userSer : UsersService, private router:Router , private navbarser : NavbarService){}
  testn( n:string ){
    const regex = /^[a-zA-Z]{3,20}$/;
        return (
            regex.test(n)
        );
  }
  teste( e : any){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(e);
  } 
  testp(p : any){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(p);
  }
  rss(p : string){
    return p == this.re_pass ;
  }
}
