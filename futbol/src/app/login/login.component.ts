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
    this.loginService.login({email: 'edgar@pere.com', password: 'davicho1214'})
    /*.subscribe((token: string) => {
      localStorage.setItem('auth', token);
      this.router.navigate(['/Welcome']);
    });*/
    if(this.loginForm.valid){
      this.router.navigate(['Welcome']);
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
