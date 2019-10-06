import { Component, OnInit } from '@angular/core';
import { faTable, faUsers, faFutbol, faSignOutAlt, faDoorOpen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  faTable = faTable;
  faUsers = faUsers;
  faFutbol = faFutbol;
  faSignOut = faSignOutAlt;
  faDoorOpen = faDoorOpen;

  constructor() { }

  ngOnInit() {
  }

}
