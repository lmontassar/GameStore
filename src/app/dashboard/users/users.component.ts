import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { MatPaginator } from '@angular/material/paginator';
import { faLock, faPenToSquare, faTrash, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons' ;
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'fullname', 'email', 'role',  'action'];
  constructor(public userser: UsersService ){}
 
  delete(id:any){
    
    const i= this.userser.users.findIndex(user => user.id === id);
    if (i !== -1){
      this.userser.users.splice(i, 1);
      this.userser.users = [...this.userser.users];
    }
  }
  icondelete = faTrash ;
  iconmodify = faPenToSquare;
  iconuser = faUser;
  iconadmin = faUserTie;
}