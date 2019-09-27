import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../model/Team';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams-component',
  templateUrl: './teams-component.component.html',
  styleUrls: ['./teams-component.component.scss']
})
export class TeamsComponentComponent implements OnInit {

   @Input () team: Team;

  constructor(private router: Router) { }

  onRedirect (id: number) {
    this.router.navigate(['Team', id]);
  }

  ngOnInit() {
  }

}
