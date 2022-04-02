import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { bearbeiter } from '@test/bearbeiter-data';
import { statusList } from '@test/status-data';

@Component({
  selector: 'app-grobkontrolle',
  templateUrl: './grobkontrolle.component.html',
  styleUrls: ['./grobkontrolle.component.scss']
})
export class GrobkontrolleComponent {

  @Input() set data(auftrag: any) {
    this.auftragList = auftrag.produkte;
    this.total = auftrag.wert;
    this.fillFormGroup();
  };

  auftragList: any;
  formGroup?: FormGroup;
  countTotal = 0;
  total = 0;

  statusList = statusList;
  bearbeiter = bearbeiter;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  private fillFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      bemerkung: ['']
    });

    this.auftragList.forEach((a: any) => {
      this.formGroup?.addControl(
        a.produkt + '.' + a.kategorie, this.formBuilder.control(null, Validators.required)
      );
    });
  }

  getForm(a: any): FormControl {
    const name = a.produkt + '.' + a.kategorie;
    return this.formGroup?.controls[name] as FormControl;
  }

  get bemerkung(): FormControl {
    return this.formGroup?.controls.bemerkung as FormControl;
  }

  setCountedTotal(): void {
    this.countTotal = this.auftragList.map((a: any) => this.getForm(a).value * a.wert).reduce((a1: any, a2: any) => a1 + a2);
  }




}
