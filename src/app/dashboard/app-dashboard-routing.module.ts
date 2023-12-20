import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameslistComponent } from './gameslist/gameslist.component';


const routes: Routes = [
    {path:"gameslist" ,component:GameslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
