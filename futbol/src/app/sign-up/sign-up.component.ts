import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { faUserPlus, faCheck} from '@fortawesome/free-solid-svg-icons';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  faUserPlus = faUserPlus;
  faCheck = faCheck;

  formSignUp: FormGroup = new FormGroup ({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPw: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private SignupService: SignupService) { }

  ngOnInit() {
  }

  onSignUp() {
    if(this.formSignUp.valid){
      if(JSON.stringify(this.formSignUp.value.password) === JSON.stringify(this.formSignUp.value.confirmPw)){
        
        let first_name = JSON.stringify(this.formSignUp.value.firstName).split('"').filter((item) => {
          if(item !== '"')
            return item;
        }).join('');

        let last_name = JSON.stringify(this.formSignUp.value.lastName).split('"').filter((item) => {
          if(item !== '"')
            return item;
        }).join('');

        let email = JSON.stringify(this.formSignUp.value.email).split('"').filter((item) => {
          if(item !== '"')
            return item;
        }).join('');

        let password = JSON.stringify(this.formSignUp.value.password).split('"').filter((item) => {
          if(item !== '"')
            return item;
        }).join('');

        this.SignupService.signup({ first_name: first_name, last_name: last_name, email: email, password: password})
        .subscribe(() => {
          alert('User Created Successfully.');
          this.router.navigate(['']);
        });
      } else {
        alert('Error: password and confirm password must be equals');
      }
    } else {
      alert('Wrong credentials!');
    }
  }

}
