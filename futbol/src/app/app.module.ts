import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamComponent } from './team/team.component';
import { GeneralTableComponent } from './general-table/general-table.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { TeamsComponentComponent } from './teams-component/teams-component.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TeamComponent,
    GeneralTableComponent,
    TableComponentComponent,
    TeamsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
