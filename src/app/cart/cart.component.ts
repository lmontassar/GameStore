import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { UsersService } from '../services/users.service';
import { Game } from '../models/game';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  gamesCart : Game[] = [];
  
  delete(id:number){
    let index = 0;
    this.gamesCart.forEach( (element:any) => {
      if(element.id == id ){
        this.gamesCart.splice(index,1);
        this.userser.user1.cart.splice( this.userser.user1.cart.indexOf(id), 1 );
        console.log(this.userser.user1.cart);
        const j = this.userser.users.findIndex(user => user.id == this.userser.user1.id);
        this.userser.users[j] = this.userser.user1;
      }
      else{
        index++;
      }
    });
  }

  faicon = faXmark;
  constructor(public userser : UsersService , public gameser : GamesService , private router : Router, private navbarser : NavbarService){}
  ngOnInit(): void {
    this.navbarser.focus = 0 ;
    if(localStorage.getItem('idlogin') === null ){
      this.router.navigate(['/login']);
    }
    this.userser.user1.cart.forEach( ( id:number ) => {
      this.gameser.games.forEach((element:any)=>{
        if(element.id === id ) {
          this.gamesCart.push( element );
        }
      });
    });
  } 
}