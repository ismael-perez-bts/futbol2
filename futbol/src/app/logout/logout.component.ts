import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../services/logout.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private logoutService: LogoutService) { }

  ngOnInit() {
  }

  public Logouts(): void{
    this.logoutService.logout().subscribe(
        () => { 
          this.logoutService.RedirecTo();
      }
    );
  }

}
