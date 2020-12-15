import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from '../../registration/services/registration.service';
import {Router} from '@angular/router';
import {MustMatch} from '../../registration/validators/must-match.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.minLength(4), Validators.maxLength(32), Validators.required]],
        password: ['', [Validators.minLength(8), Validators.required, Validators.maxLength(32)]],
      }
      );
  }


  navigate(): void {
    console.log(this.router);
    // this.router.navigate(['/reset-password']);
  }

  postDataForRegistration(): void {
    // this.registrationService.getUsers().subscribe(value => console.log(value));

  }
}
