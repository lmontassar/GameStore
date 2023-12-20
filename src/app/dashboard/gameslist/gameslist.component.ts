import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { MatPaginator } from '@angular/material/paginator';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-gameslist',
  templateUrl: './gameslist.component.html',
  styleUrls: [  './gameslist.component.css', ],
  
})
export class GameslistComponent{
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'type', 'year' , 'action'];
  
  constructor(public gameser : GamesService ){}
  delete(id:any){
    const i= this.gameser.games.findIndex(game => game.id === id);
    if (i !== -1){
      this.gameser.games.splice(i, 1);
      this.gameser.games = [...this.gameser.games];
    }
  }

  icondelete = faTrash ;
  iconmodify = faPenToSquare;
}
