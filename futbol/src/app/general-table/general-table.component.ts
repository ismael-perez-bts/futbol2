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

  public teams;

  constructor(private teamsService: TeamsService, private router: ActivatedRoute) {
  
    this.teamsService.getConsult().subscribe((data) => {
      this.teams = Object.values(data)[2].sort(this.teamsService.sortByName)
    });
  
    
   }
   
  ngOnInit() {
    
  }

}
