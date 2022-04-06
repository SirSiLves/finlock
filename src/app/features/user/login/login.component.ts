import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user$ = this.authenticationService.user$;
  searched = false;

  formGroup = this.formBuilder.group({
    user: ['', [Validators.required, Validators.min(3)]],
    password: ['', [Validators.required, Validators.min(3)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
  }

  get user(): FormControl {
    return this.formGroup.controls.user as FormControl;
  }

  get password(): FormControl {
    return this.formGroup.controls.password as FormControl;
  }

  login(): void {
    this.authenticationService.login({
      id: this.user.value,
      password: this.password.value
    });

    this.formGroup.markAsUntouched();
    this.searched = true;
  }
}
