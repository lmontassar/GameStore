import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameslistComponent } from './dashboard/gameslist/gameslist.component';
import { AddGameComponent } from './dashboard/add-game/add-game.component';
import { UsersComponent } from './dashboard/users/users.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { EditGameComponent } from './edit-game/edit-game.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { GameComponent } from './game/game.component';
import { BuyComponent } from './buy/buy.component';
import { MygameComponent } from './mygame/mygame.component';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    DashboardComponent,
    GameslistComponent,
    AddGameComponent,
    UsersComponent,
    EditGameComponent,
    ModifyUserComponent,
    MyprofileComponent,
    GameComponent,
    BuyComponent,
    MygameComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatTableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
