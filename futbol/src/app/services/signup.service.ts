import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private router: Router, private http: HttpClient) { }

  public signup (credentials: Object) {
    return this.http.post(`${environment.apiUrl}/user/signUp`, credentials);
  }
}
