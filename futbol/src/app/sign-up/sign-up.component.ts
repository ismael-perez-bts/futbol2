import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { faUserPlus, faCheck} from '@fortawesome/free-solid-svg-icons';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSignUp() {
    if(this.formSignUp.valid){
      if(JSON.stringify(this.formSignUp.value.password) === JSON.stringify(this.formSignUp.value.confirmPw)){
        this.router.navigate(['/Welcome']);
      } else {
        alert('Error: password and confirm password must be equals');
      }
    } else {
      alert('Wrong credentials!');
    }
  }

}
