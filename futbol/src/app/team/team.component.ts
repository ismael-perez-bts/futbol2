import { Component, OnInit } from '@angular/core';
import { Team } from '../model/Team';
import { TeamsService } from '../services/teams.services';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  providers: [TeamsService]
})
export class TeamComponent implements OnInit {
  public teams;
  
  constructor(private teamsService: TeamsService, private Route: ActivatedRoute) {

    this.teamsService.getConsult().subscribe((data) => {
      this.teams = Object.values(data)[2];
    });
     
     
   }

  ngOnInit() {

  }

}
