import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faKey, faBan } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../services/login.service';



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

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  } 

  onLogin () {
    if(this.loginForm.valid){
      let email = JSON.stringify(this.loginForm.value.email).split('"').filter((item) => {
        if(item !== '"')
          return item;
      }).join('');
      let password = JSON.stringify(this.loginForm.value.password).split('"').filter((item) => {
        if(item !== '"')
          return item;
      }).join('');
      this.loginService.login({email: email, password: password})
      .subscribe((token: string) => {
        localStorage.setItem('auth', token);
        this.router.navigate(['Welcome']);
      });
    } else {
      alert('Wrong credentials!');
    }

  }


  /*onLogin() {
    if(this.loginForm.valid){
      this.router.navigate(['/Welcome']);
    } else {
      alert('Wrong credentials!');
    }
  }*/
}
