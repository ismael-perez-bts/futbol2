import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../model/Team';
import { Router } from '@angular/router';
import { TeamsService } from '../services/teams.services';

@Component({
  selector: 'app-teams-component',
  templateUrl: './teams-component.component.html',
  styleUrls: ['./teams-component.component.scss'],
})
export class TeamsComponentComponent implements OnInit {

   @Input () team: Team;

  constructor(private router: Router, private teamService: TeamsService) { }

  onRedirect (id: string) {
    this.router.navigate(['/Update-Teams', id]);    
  }

  ngOnInit() {
  }

}
