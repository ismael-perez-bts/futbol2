import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faKey, faBan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faKey = faKey;
  faBan = faBan;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit() {
  } 


  onLogin() {
    if(this.loginForm.valid){
      this.router.navigate(['/Welcome']);
    } else {
      alert('Wrong credentials!');
    }
  }
}
