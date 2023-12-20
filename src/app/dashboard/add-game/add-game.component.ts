import { Component } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {
  
  OnSubmit(game:any){
    game.id = Date.now();
    this.gameser.games.push(game);
    this.dash.r = 1 ;
  }
  constructor( public gameser:GamesService , public dash : DashboardComponent){}
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
