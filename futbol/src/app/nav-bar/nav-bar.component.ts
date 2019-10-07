import { Component, OnInit } from '@angular/core';
import { faTable, faUsers, faFutbol, faSignOutAlt, faDoorOpen} from '@fortawesome/free-solid-svg-icons';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [LogoutComponent]
})


export class NavBarComponent implements OnInit {

  faTable = faTable;
  faUsers = faUsers;
  faFutbol = faFutbol;
  faSignOutAlt = faSignOutAlt;
  faDoorOpen = faDoorOpen;

  constructor(private logoutComponent: LogoutComponent) { }

  ngOnInit() {
  }
 public Logout(): void{
    this.logoutComponent.Logouts()
  }


}
