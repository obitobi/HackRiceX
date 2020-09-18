import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { UserComponent } from './user/user.component';
import {UserService} from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
