import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../services/games.service';
import { ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { NavbarService } from '../services/navbar.service';
@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit,AfterViewInit {
  constructor( public gameser:GamesService , private route : ActivatedRoute , private router : Router , private userser : UsersService , private navbarser : NavbarService ){}


  id : any;
  @ViewChild('gameForm') gameForm!: NgForm;
  resetForm() {
    this.gameForm.reset(); // Reset the form
  }
  ngAfterViewInit(){
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id)
    const i= this.gameser.games.findIndex( game => game.id == this.id );
    if(i<0) {
      this.router.navigate(['/not-found']); 
    }
    console.log(i)
    let x = {
      "name": this.gameser.games[i].name,
      "description":this.gameser.games[i].description,
      "price":this.gameser.games[i].price ,
      "type":this.gameser.games[i].type,
      "year":this.gameser.games[i].year,
      "image":this.gameser.games[i].image,
      "key" : this.gameser.games[i].key,
    }
    setTimeout(() => {
      this.gameForm.setValue(x);
    });
  }
  onSumbmit(formvalues : any){
    formvalues.id = this.id ;
    const i= this.gameser.games.findIndex( game => game.id == this.id );
    this.gameser.games[i] = formvalues;
    this.router.navigate(['/dashboard'])
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
  testname(n:any ) {
    const regex = /^[A-Za-z0-9\s'’-]+$/;
    return regex.test( n );
  }
  testprice(p: any): boolean {
    const pricePattern: RegExp = /^\$?\d+(\.\d{1,2})?$/;
    return pricePattern.test(p);
  }
  testn( n:string ){
    const regex = /^[a-zA-Z]{3,20}$/;
        return (
            regex.test(n)
        );
  }
  testkey(value: string): boolean {
    const pattern = /^[0-9A-Za-z]{4}-[0-9A-Za-z]{4}-[0-9A-Za-z]{4}-[0-9A-Za-z]{4}$/;
    return pattern.test(value);
  }
  testyear(year : string){
    const pattern = /^[0-9]{4}$/ ; 
    return pattern.test(year);
  }
  testImage(imageurl: string): boolean {
    const pattern = /\.(jpeg|jpg|gif|png)$/i;
    return pattern.test(imageurl);
  }
}
