import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { GameComponent } from './game/game.component';
import { BuyComponent } from './buy/buy.component';
import { MygameComponent } from './mygame/mygame.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signin", component: SigninComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "cart", component: CartComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "editGame/:id", component: EditGameComponent },
  { path: "editProfile/:id", component: ModifyUserComponent },
  { path: "Profile", component: MyprofileComponent },
  { path: "game/:id", component: GameComponent },
  { path: "buyfor/:id", component: BuyComponent },
  { path: "myGames", component: MygameComponent },
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  { path: "**", component: NotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
