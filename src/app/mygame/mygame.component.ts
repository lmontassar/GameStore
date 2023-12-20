import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { GamesService } from '../services/games.service';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-mygame',
  templateUrl: './mygame.component.html',
  styleUrls: ['./mygame.component.css']
})
export class MygameComponent implements OnInit {

  constructor(public userser : UsersService , public gameser : GamesService ,private router : Router ,private navbarser: NavbarService ){}
  myGames : any[] = [];

  ngOnInit(){
    this.navbarser.focus = 3 ;
    if(localStorage.getItem('idlogin') === null ){
      this.router.navigate(['/login']);
    }
    this.userser.user1.games.forEach( (id:any) => {
      const i = this.gameser.games.findIndex( game => game.id == id);
      if(i>=0)
        this.myGames.push( this.gameser.games[i] );
      
    });
  }
}
