import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../model/Team';
import { Router } from '@angular/router';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teams-component',
  templateUrl: './teams-component.component.html',
  styleUrls: ['./teams-component.component.scss']
})
export class TeamsComponentComponent implements OnInit {

  faEye = faEye;

  @Input () team: Team;

  constructor(private router: Router) { }

  onRedirect (id) {
    console.log(id)
    this.router.navigate(['/Update-Teams', id]);
  }

  ngOnInit() {
  }

}
