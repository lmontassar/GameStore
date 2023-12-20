import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router , private userser:UsersService){}
  title = 'GameStore';
  ngOnInit(): void {
    if(localStorage.getItem('idlogin') !== null ){
      this.userser.users.forEach( (us:any) => {
        if(us.id == localStorage.getItem('idlogin') ){
          this.userser.user1 = us;
        }
      });
      if(this.userser.user1 === null ){
        localStorage.removeItem('idlogin');
        this.router.navigate(['/login']);
      }
    }
  }
}
