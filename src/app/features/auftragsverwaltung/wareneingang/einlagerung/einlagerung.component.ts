import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { bearbeiter } from '@test/bearbeiter-data';
import { statusEingangList } from '@test/status-data';

@Component({
  selector: 'app-einlagerung',
  templateUrl: './einlagerung.component.html',
  styleUrls: ['./einlagerung.component.scss']
})
export class EinlagerungComponent {

  @Input() set data(auftrag: any) {
    this.auftrag = auftrag;
    this.auftragList = auftrag.produkte;
    this.fillFormGroup();

    if (this.status.value.value === 'EINGELAGERT') {
      this.auftragList.forEach((a: any) => {
        this.getFormLager(a).patchValue(this.lagerRegal[1]);
      });
      this.formGroup?.disable();
    }
  };

  @Output() save$ = new EventEmitter<any>();

  auftrag: any;
  auftragList: any;
  formGroup?: FormGroup;

  statusListOptions = statusEingangList;
  bearbeiterOptions = bearbeiter;
  lagerRegal = [
    {name: 'A1 Nord', value: 'A1N'},
    {name: 'A2 Nord', value: 'A2N'},
    {name: 'A1 Süd', value: 'A1S'},
    {name: 'A2 Süd', value: 'A2S'},
    {name: 'B1 Nord', value: 'B1N'},
    {name: 'B2 Süd', value: 'B2SN'},
  ];

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  private fillFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      bemerkung: [''],
      status: [this.auftrag.status],
      bearbeiter: [Validators.required]
    });

    this.status.patchValue(this.statusListOptions.filter(s => s.value === this.auftrag.status)[0]);

    this.auftragList.forEach((a: any) => {
      this.formGroup?.addControl(
        a.produkt + '.' + a.kategorie + '_lager', this.formBuilder.control(null, Validators.required)
      );
    });
  }


  getFormLager(a: any): FormControl {
    const name = a.produkt + '.' + a.kategorie + '_lager';
    return this.formGroup?.controls[name] as FormControl;
  }

  get bemerkung(): FormControl {
    return this.formGroup?.controls.bemerkung as FormControl;
  }

  get status(): FormControl {
    return this.formGroup?.controls.status as FormControl;
  }

  get bearbeiter(): FormControl {
    return this.formGroup?.controls.bearbeiter as FormControl;
  }

  save(): void {
    this.auftrag.status = this.status.value.value;

    if (this.status.value.value === 'EINGELAGERT') {
      this.formGroup?.disable();
      this.auftrag.inBearbeitung = false;
      this.save$.emit(this.auftrag);
    } else {
      this.auftrag.inBearbeitung = true;
    }

    this.formGroup?.markAsUntouched();
    this.formGroup?.markAsPristine();
  }

  cancel(): void {
    this.formGroup?.reset();
  }

}
