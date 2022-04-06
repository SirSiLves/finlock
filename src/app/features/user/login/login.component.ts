import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/authentication.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private onDestory$ = new Subject<void>();

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

  ngOnInit(): void {
    this.authenticationService.user$.pipe(takeUntil(this.onDestory$)).subscribe(user => {
      if (!user) {
        this.searched = false;
        this.formGroup.reset();
      }
    });
  }

  ngOnDestroy(): void {
    this.onDestory$.next();
    this.onDestory$.complete();
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
