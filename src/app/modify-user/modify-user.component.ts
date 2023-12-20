import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent {

  constructor( public userser:UsersService , private route : ActivatedRoute , private router : Router , private navbarser : NavbarService ){}
  id : any;
  admin : any;
  @ViewChild('userForm') userForm!: NgForm;
  resetForm() {
    this.userForm.reset(); // Reset the form
  }

  ngAfterViewInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const i = this.userser.users.findIndex( user => user.id == this.id  ) ;
    let x : any = {
      firstname: this.userser.users[i].firstname,
      lastname: this.userser.users[i].lastname,
      email: this.userser.users[i].email  
    }
    this.admin = this.userser.users[i].admin ;
    if (this.admin == false ) {
      x.admin ="";
    }
    console.log(x)
    setTimeout(() => {
      this.userForm.setValue(x);
    } );
  }
  ngOnInit(){  
    this.navbarser.focus = 0 ;
    if(localStorage.getItem('idlogin') === null ){
      this.router.navigate(['/login']);
    }
    if( this.userser.user1.admin != true ){
      this.router.navigate(['/not-found']); 
    }
  }
  ngEdit(userf : any) {
    if(userf.admin == "" )
      userf.admin = false;
    if( userf.admin == null ){
      userf.admin = true;
    }
    const i = this.userser.users.findIndex( user => user.id == this.id ) ;
    this.userser.users[i].firstname = userf.firstname ;
    this.userser.users[i].lastname = userf.lastname ;
    this.userser.users[i].email = userf.email ;
    this.userser.users[i].admin = userf.admin ;
    this.router.navigate(['/dashboard']);
  }
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
}
