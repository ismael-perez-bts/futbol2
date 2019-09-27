import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
    this.loginForm.setValue({ ...this.loginForm.value, email: 'elcejas@gmail.com' });
  }

  onLogin() {
    if(this.loginForm.valid){
      let data = JSON.stringify(this.loginForm.value);
      alert(data);  
    } else {
      alert('Wrong credentials!');
    }
  }
}
