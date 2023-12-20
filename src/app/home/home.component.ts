import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { GamesService } from '../services/games.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  faicon = faMagnifyingGlass;
  cartbtn : any = []; 
  soe = ""
  constructor(public userser : UsersService , public gameser : GamesService , private router : Router , private navbarser : NavbarService ){}
  addtocart(id:number,i:number){
    const exist = this.userser.user1.cart.some( (id4:any) => id4 === id  )
    if( exist === false ){
      this.cartbtn[i]="added";
      this.userser.user1.cart.push(id);
      const j = this.userser.users.findIndex(user => user.id == this.userser.user1.id);
      this.userser.users[j] = this.userser.user1 ;
    }else{
      this.cartbtn[i]="add to cart";
      let index = this.userser.user1.cart.indexOf(id);
      this.userser.user1.cart.splice(index, 1);
      const j = this.userser.users.findIndex(user => user.id == this.userser.user1.id);
      this.userser.users[j] = this.userser.user1;
    }
  }
  Games : any[]= [];
  ngOnInit(): void {
    this.navbarser.focus = 1 ;
    if(localStorage.getItem('idlogin') === null ){
      this.router.navigate(['/login']);
    }
    this.gameser.games.forEach( (element : any) => {
      if( this.userser.user1.games.findIndex( (id:any) => id == element.id ) == -1 ){
        this.Games.push(element);
        const exist = this.userser.user1.cart.some( (id4:any) => id4 === element.id  )
        if(exist === false)
          this.cartbtn.push("add to cart");
        else
          this.cartbtn.push("added");
      }
    });
  }
  search(){
    this.Games = [];
    this.gameser.games.forEach( (element : any) => {
      if( this.userser.user1.games.findIndex( (id:any) => id == element.id ) == -1 ){
        if( element.name.toUpperCase( ).indexOf(this.soe.toUpperCase( )) >=0 || element.description.toUpperCase( ).indexOf(this.soe.toUpperCase( )) >=0 || element.type.toUpperCase( ).indexOf(this.soe.toUpperCase( )) >=0 ){
          this.Games.push(element);
          const exist = this.userser.user1.cart.some( (id4:any) => id4 === element.id  )
          if(exist === false)
            this.cartbtn.push("add to cart");
          else
            this.cartbtn.push("added");
        }
      }
    });
  }
}
