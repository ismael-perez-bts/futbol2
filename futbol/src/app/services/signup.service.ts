import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private router: Router, private http: HttpClient) { }

  public signup (credentials: Object) {
    return this.http.post('http://localhost:3000/api/user/signUp', credentials);
  }
}
