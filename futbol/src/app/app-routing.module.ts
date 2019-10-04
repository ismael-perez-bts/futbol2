import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneralTableComponent } from './general-table/general-table.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '',
    component: LoginComponent },
  { path: 'Table', 
    component: GeneralTableComponent,
   // canActivate: [AuthGuard]
  },
  { path: 'Teams',
    component: TeamComponent,
  //  canActivate: [AuthGuard]
 },
  { path: 'Login',
    component: LoginComponent,
   // canActivate: [AuthGuard] 
  },
  { path: 'Welcome',
    component: WelcomeComponent },
  { path: 'Update-Teams',
    component: UpdateTeamComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: ':id',
         component: UpdateTeamComponent }
         
    ]
   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
