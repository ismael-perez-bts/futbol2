import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneralTableComponent } from './general-table/general-table.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UpdateTeamComponent } from './update-team/update-team.component';

const routes: Routes = [
  { path: '',
    component: LoginComponent },
  { path: 'Table', 
    component: GeneralTableComponent
  },
  { path: 'Teams',
    component: TeamComponent },
  { path: 'Login',
    component: LoginComponent },
  { path: 'Welcome',
    component: WelcomeComponent },
  { path: 'Update-Teams',
    component: UpdateTeamComponent,
    children: [
      { path: ':id',
         component: UpdateTeamComponent }
    ]
   }  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
