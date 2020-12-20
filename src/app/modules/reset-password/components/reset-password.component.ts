import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppService} from '../../../services/app.service';
import {ResetPasswordService} from '../services/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public resetForm: FormGroup;
  error: any;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private resetPasswordService: ResetPasswordService,
              private appService: AppService) {
  }
  ngOnInit(): void {
    this.resetForm = this.formBuilder.group(
      {
        email: ['', [Validators.email]],
      }
    );
  }


  // navigate(): void {
  //   console.log(this.router);
  //   this.router.navigate(['/reset-password']);
  // }

  reset(): void {

    // Test
    this.resetPasswordService.resetPasswordOrLogin(this.resetForm.controls.email.value);
      // .subscribe(value => {
      //   this.loginForm.reset();
      //   this.router.navigate(['']);
      // },
      // error => {
      //   this.error = error.message;
      //   console.log(error);
      // }
    // );
  }
}
