import { Component, OnInit } from '@angular/core';
import { faTable, faUsers, faFutbol } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  faTable = faTable;
  faUsers = faUsers;
  faFutbol = faFutbol;

  constructor() { }

  ngOnInit() {
  }

}
