import { Component, OnInit, Input} from '@angular/core';
import { Team } from '../model/Team';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent implements OnInit {

  @Input () team: Team;

  constructor(private router: Router) { }

  onRedirect (id: number) {
    this.router.navigate(['Team', id]);
  }

  ngOnInit() {
  }

}
