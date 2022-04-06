import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/authentication.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit, OnDestroy {

  private onDestroy$ = new Subject<void>();

  formGroup = this.formBuilder.group({
    vorname: ['', [
      Validators.required, Validators.minLength(2),
      Validators.maxLength(100)]
    ],
    nachname: ['', [
      Validators.required, Validators.minLength(2),
      Validators.maxLength(100)]
    ],
    mail: ['', [
      Validators.required, Validators.minLength(2),
      Validators.maxLength(100),
      Validators.pattern('^([^.@]+)(\\.[^.@]+)*@([^.@]+\\.)+([^.@]+)$')]
    ],
    text: ['', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(1000),
    ]]
  });

  fileTypes = '.pdf, .csv, .png, .jpg, .doc, .docx, .xls, .xlsx';

  confirm = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.authenticationService.user$.pipe(takeUntil(this.onDestroy$)).subscribe(user => {
      if (user) {
        this.vorname.patchValue(user.vorname);
        this.vorname.disable();
        this.nachname.patchValue(user.nachname);
        this.nachname.disable();
        this.mail.patchValue(user.ma  );
        this.mail.disable();
      }
      else {
        this.formGroup.reset();
      }
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  send(): void {
    this.confirm = true;
    this.formGroup.reset();
  }


  get vorname(): FormControl {
    return this.formGroup.controls.vorname as FormControl;
  }

  get nachname(): FormControl {
    return this.formGroup.controls.nachname as FormControl;
  }

  get mail(): FormControl {
    return this.formGroup.controls.mail as FormControl;
  }

  get text(): FormControl {
    return this.formGroup.controls.text as FormControl;
  }


}
