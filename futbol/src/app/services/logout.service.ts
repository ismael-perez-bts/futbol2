import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})

export class LogoutService {
    
  constructor (private router: Router, private http: HttpClient, private loginService: LoginService) { }

  public logout () {
    return this.http.post(`${environment.apiUrl}/user/login`, {});
  }

  public RedirecTo(): void{
    localStorage.removeItem('auth');
    this.router.navigate(['Login']);
    this.loginService.isLoggedIn();
  }

}
