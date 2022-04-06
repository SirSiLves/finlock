import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { users } from '@test/user-data';
import { statusEingangList } from '@test/status-data';

@Component({
  selector: 'app-feinkontrolle',
  templateUrl: './feinkontrolle.component.html',
  styleUrls: ['./feinkontrolle.component.scss']
})
export class FeinkontrolleComponent {

  @Input() set data(auftrag: any) {
    this.auftrag = auftrag;
    this.auftragList = auftrag.produkte;
    this.total = auftrag.wert;
    this.fillFormGroup();

    if (this.status.value.value === 'NEU') {
      this.formGroup?.disable();
    }

    if (this.status.value.value === 'FEINKONTROLLIERT' || this.status.value.value === 'EINGELAGERT') {
      this.auftragList.forEach((a: any) => {
        this.getFormAnzahl(a).patchValue(a.anzahl);
        this.getFormZustand(a).patchValue(this.zustandOptions[1]);
      });
      this.setCountedTotal();
      this.formGroup?.disable();
    }
  };

  @Output() save$ = new EventEmitter<any>();

  auftrag: any;
  auftragList: any;
  formGroup?: FormGroup;
  countTotal = 0;
  total = 0;

  statusListOptions = statusEingangList;
  bearbeiterOptions = users;
  zustandOptions = [
    {name: 'Defekt', value: 0},
    {name: 'Gebraucht', value: 1},
    {name: 'Neuwertig', value: 2},
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
        a.produkt + '.' + a.kategorie, this.formBuilder.control(null, Validators.required)
      );

      this.formGroup?.addControl(
        a.produkt + '.' + a.kategorie + '_zustand', this.formBuilder.control(null, Validators.required)
      );
    });
  }

  getFormAnzahl(a: any): FormControl {
    const name = a.produkt + '.' + a.kategorie;
    return this.formGroup?.controls[name] as FormControl;
  }

  getFormZustand(a: any): FormControl {
    const name = a.produkt + '.' + a.kategorie + '_zustand';
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

  setCountedTotal(): void {
    this.countTotal = this.auftragList.map((a: any) => this.getFormAnzahl(a).value * a.wert).reduce((a1: any, a2: any) => a1 + a2);
  }

  save(): void {
    this.auftrag.status = this.status.value.value;

    if (this.status.value.value === 'FEINKONTROLLIERT') {
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
    this.countTotal = 0;
  }

  canClose(): boolean {
    return (this.status.value.value === 'FEINKONTROLLIERT'
      && (this.countTotal !== this.total && !this.bemerkung.value));
  }

  back(): void {
    this.formGroup?.disable();
    this.auftrag.inBearbeitung = false;
    this.auftrag.status = 'NEU';
    this.save$.emit(this.auftrag);
  }
}
