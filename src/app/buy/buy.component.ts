import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../services/games.service';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  id : any;
  game : any;
  constructor(public userser :UsersService ,public gameser : GamesService,private route : ActivatedRoute,private router : Router , private navbarser : NavbarService){}
  ngOnInit(){
    if(localStorage.getItem('idlogin') === null ){
      this.router.navigate(['/login']);
    }
    this.navbarser.focus = 0 ;
    this.id = this.route.snapshot.paramMap.get('id');
    const i = this.gameser.games.findIndex(game => game.id == this.id);
    if(i<0) {
      this.router.navigate(['/not-found']); 
    }
    if(i>=0)
      this.game = this.gameser.games[i];
  }
  onSubmit(){
    this.userser.user1.games?.push( this.id );
    const j = this.userser.user1.cart.findIndex( (id1:any) => id1 == this.id);
    if( j >=0 ) this.userser.user1.cart.splice(j,1);
    const i = this.userser.users.findIndex(user => user.id == this.userser.user1.id);
    this.userser.users[i] = this.userser.user1;
    this.router.navigate(['/game/'+this.id]);
  }
  testCN(cardNumber: string): boolean {
    const cardNumberPattern = /^\d{12,19}$/;
    return cardNumberPattern.test(cardNumber); // Remove spaces if present
  }
  testCName(fullname: string): boolean {
    const namePattern = /^[A-Za-z]+(?:['-][A-Za-z]+)*\s[A-Za-z]+(?:['-][A-Za-z]+)*$/;
    return namePattern.test(fullname);
  }
  testmonth(m: any): boolean {
    const month = parseInt(m, 10);
    return !isNaN(month) && month >= 1 && month <= 12;
}

  testyear(y: any): boolean {
    const year = parseInt(y, 10);
    const currentYear = new Date().getFullYear(); // Get current year for reference
    return !isNaN(year) && year >= currentYear && year <= (currentYear + 10); // Validate within a range
  }
  testcode(c:any){
    return /^[0-9]{3}$/.test(c);
  }
}
