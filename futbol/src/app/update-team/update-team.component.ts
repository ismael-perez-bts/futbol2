import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Team } from '../model/Team';
import { TeamsService } from '../services/teams.services';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { faSave } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.scss']
})
export class UpdateTeamComponent implements OnInit {
    faSave = faSave;
    
    team: Team;
    id: string;
    formTeam: FormGroup;

    infoTeam () {
    this.formTeam = new FormGroup ({ 
      id: new FormControl(this.team.id, Validators.required),
      location: new FormControl(this.team.location, Validators.required),
      stadium: new FormControl(this.team.stadium, Validators.required),
      logo: new FormControl(this.team.logo, Validators.required),
      name: new FormControl(this.team.name, Validators.required),
      games_played: new FormControl(this.team.games_played, Validators.required),
      games_won: new FormControl(this.team.games_won, Validators.required),
      games_tied: new FormControl(this.team.games_tied, Validators.required),
      games_lost: new FormControl(this.team.games_lost, Validators.required),
      goals_in_favor: new FormControl(this.team.goals_in_favor, Validators.required),
      goals_against: new FormControl(this.team.goals_against, Validators.required),
      goal_difference: new FormControl(this.team.goal_difference, Validators.required),
      points: new FormControl(this.team.points, Validators.required),
      position: new FormControl(this.team.position, Validators.required)
    });
  };

  constructor(private teamservice: TeamsService, private router: Router, private route: ActivatedRoute) {

     this.searchTeam(); 
    

   }


  ngOnInit() {
  }

   public searchTeam (): void {
   this.router.events.subscribe((data)=> {
      if (data instanceof NavigationEnd) {
          this.id = data.url.split('/')[2];
          this.teamservice.searchTeamId(this.id).subscribe((teams) => {
          this.team = Object.values(teams)[2];
          this.team = Object.values(this.team)[0];
      this.infoTeam ();
    })
      }
    })
  }

   

  public update (): void {
    let form = this.formTeam;

    if (!form.valid) {
      alert('Data not valid.');
      return;
    }
    this.submitData(form.value);
  }

  public submitData (form: Team): void {
    this.teamservice.updateTeams(form).subscribe((data) => {
    this.team = data;
    });
    this.router.navigate(['Teams']);
  } 

}
