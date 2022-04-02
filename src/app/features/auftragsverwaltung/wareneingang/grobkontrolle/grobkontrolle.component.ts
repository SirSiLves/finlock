import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-grobkontrolle',
  templateUrl: './grobkontrolle.component.html',
  styleUrls: ['./grobkontrolle.component.scss']
})
export class GrobkontrolleComponent implements OnInit {

  @Input() auftragList: any;

  formGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.fillFormGroup();
  }

  private fillFormGroup(): void {
    this.auftragList.forEach((a: any) => {
      this.formGroup.addControl(
        a.produkt + '.' + a.kategorie, this.formBuilder.control(null, Validators.required)
      );
    });
  }


  getForm(a: any): FormControl {
    const name = a.produkt + '.' + a.kategorie;
    return this.formGroup.controls[name] as FormControl;
  }
}
