import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { GeneralTableComponent } from './general-table/general-table.component';


const routes: Routes = [
  { path: '',
    component: GeneralTableComponent},
  { path: 'Table', 
    component: GeneralTableComponent
  },
  { path: 'Teams',
    component: TeamComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
