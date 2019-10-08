import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../model/Team';
import { Router } from '@angular/router';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { TeamsService } from '../services/teams.services';

import { from } from 'rxjs';

@Component({
  selector: 'app-teams-component',
  templateUrl: './teams-component.component.html',
  styleUrls: ['./teams-component.component.scss'],
})
export class TeamsComponentComponent implements OnInit {

  faEye = faEye;

  @Input () team: Team;

  constructor(private router: Router, private teamService: TeamsService) { }
  
  onRedirect (id: number) {
    this.router.navigate(['/Update-Teams', id]);    
  }

  ngOnInit() {
  }

}
