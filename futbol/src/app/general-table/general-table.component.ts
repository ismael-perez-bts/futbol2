import { Component, OnInit } from '@angular/core';
import { Team } from '../model/Team';
import { TeamsService } from '../services/teams.services';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss'],
  providers: [TeamsService]
})
export class GeneralTableComponent implements OnInit {

  public teams$: Observable<Team []>;
  columns: string[];

  constructor(private teamsService: TeamsService, private router: ActivatedRoute) {
  /*  this.teamsService.getTeams().subscribe(data => {
      this.team = data; 
      }) */

   this.teams$ = this.teamsService.getTeams();
   this.columns = ['position', 'team', 'games_played', 'games_won', 'games_tied', 'games_lost', 'goals_in_favor', 'goals_against', 'goal_difference', 'points' ];
  
    
   }
   
  ngOnInit() {
    
  }

}
