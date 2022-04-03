import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent {

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
    private formBuilder: FormBuilder
  ) {
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
