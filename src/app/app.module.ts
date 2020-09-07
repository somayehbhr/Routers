import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes= [
  {path:'', component: HomeComponent},
  {path:'users', component:UsersComponent},
  {path:'users/:id/:name', component:UserComponent},
  {path:'accounts', component:AccountsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountsComponent,
    UsersComponent,
    EditUserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
