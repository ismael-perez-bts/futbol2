import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private http: HttpClient) { }

  public login (credentials: Object) {
    return this.http.post(`${environment.apiUrl}/user/login`, credentials);
  }

  isLoggedIn () {
    const token = localStorage.getItem('auth')
    console.log(token)
    return token;
    }
 
}
