import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private http: HttpClient) { }

  public login (credentials: Object) {
    return this.http.post('http://localhost:3000/api/user/login', credentials);
  }

  isLoggedIn () {
    const token = localStorage.getItem('token')
    return token ? true : false;
  }

 
}
