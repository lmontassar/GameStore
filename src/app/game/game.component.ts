import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GamesService } from '../services/games.service';
import { UsersService } from '../services/users.service';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(public userser : UsersService , private router : Router,private route: ActivatedRoute, public gameser: GamesService , private navbarser : NavbarService){}
  game : any;
  id:any;
  btn : any;
  buyed = false;
  ngOnInit(){
    this.navbarser.focus = 0 ;
    if(localStorage.getItem('idlogin') === null ){
      this.router.navigate(['/login']);
    }
    this.id = this.route.snapshot.paramMap.get('id');
    const i = this.gameser.games.findIndex( game => game.id == this.id );
    if(i<0) {
      this.router.navigate(['/not-found']); 
    }
    this.game = this.gameser.games[i];
    const exist = this.userser.user1.cart.some( (id4:any) => id4 == this.id  )
      if( exist === false)
        this.btn = ("add to cart");
      else
        this.btn = ("added");
    const j = this.userser.user1.games.findIndex( (id:any)=> id == this.id ) ;
    this.buyed = j >= 0 ;
  }
  addtocart(id:number){
    const exist = this.userser.user1.cart.some( (id4:any) => id4 === id  )
    if( exist === false ){
      this.btn="added";
      this.userser.user1.cart.push(id);
      const j = this.userser.users.findIndex(user => user.id == this.userser.user1.id);
      this.userser.users[j] = this.userser.user1;
    }else{
      this.btn="add to cart";
      let index = this.userser.user1.cart.indexOf(id);
      this.userser.user1.cart.splice(index, 1);
      const j = this.userser.users.findIndex(user => user.id == this.userser.user1.id);
      this.userser.users[j] = this.userser.user1;
    }
  }
}