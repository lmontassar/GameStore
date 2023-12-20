import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  any_message = false;
  type_message = "" ;
  message ="" ;
  edit:any = "name";
  Modif : any ; 
  currpass ="";
  newpass ="";
  repass ="";
  Editto( r : String){
    this.edit = r ;
    this.any_message = false;
  }
  constructor(public userser : UsersService , private router : Router , private navbarser : NavbarService){}
  
  ngOnInit(){
    this.navbarser.focus = 0 ;
    
    if(localStorage.getItem('idlogin') === null ){
      this.router.navigate(['/login']);
    }
    this.Modif = {
      firstname : this.userser.user1.firstname,
      lastname : this.userser.user1.lastname,
      email : this.userser.user1.email,
    }  
  }

  showMessage(msg:string,type:string,s:number){
    this.any_message = true;
    this.type_message = type;
    this.message = msg;
    setTimeout(
      ()=>{
        this.any_message = false;
      }, s * 1000 
    )
  }

  change(){
    let ok = false;
    switch( this.edit ){
      case "name" : {
        this.userser.user1.firstname = this.Modif.firstname;
        this.userser.user1.lastname = this.Modif.lastname;
        // --- // 
        this.showMessage("name is changed successfuly","success",15);
        // -- //
        ok = true;
        break;
      }
      case "email" : {
        const i = this.userser.users.findIndex( user => user.email == this.Modif.email );
        if( i>=0 ){
          ok = true;
          this.showMessage("email has already taken","danger",15);
          break;
        }
        this.userser.user1.email = this.Modif.email;
        ok = true;
        this.showMessage("email is changed successfuly","success",15);
        break;
      }
      case "password" : {

        if(this.currpass == this.userser.user1.password){
          if( this.newpass == this.repass){
            this.userser.user1.password = this.newpass ;
            this.showMessage( "password is changed successfuly" , "success", 15 );
            break;
          }
        }else{
          this.showMessage( "current password is incorrect" , "danger", 15 );
          break;
        }
        break;
      }
    }
    if(ok){
      const i = this.userser.users.findIndex(user => user.id == this.userser.user1.id );
      this.userser.users[i] = this.userser.user1 ;
    }
    console.log('clicked');
  }
  testn( n:string ){
    const regex = /^[a-zA-Z]{3,20}$/;
        return (
            regex.test(n)
        );
  }
  teste( e : any){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
    return emailRegex.test(e);
  }
  testp(p : any){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(p);
  }
}