import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { users } from '@test/user-data';
import { statusAusgangList } from '@test/status-data';

@Component({
  selector: 'app-ruesten',
  templateUrl: './ruesten.component.html',
  styleUrls: ['./ruesten.component.scss']
})
export class RuestenComponent {

  @Input() set data(auftrag: any) {
    this.auftrag = auftrag;
    this.auftragList = auftrag.produkte;
    this.total = auftrag.wert;
    this.fillFormGroup();

    if (this.status.value.value === 'GERUESTET' || this.status.value.value === 'VERPACKT' || this.status.value.value === 'VERSENDET') {
      this.auftragList.forEach((a: any) => {
        this.getForm(a).patchValue(a.anzahl);
        this.getFormBag(a).patchValue(this.bezeichnungBagOptions[3]);
        this.getFormLager(a).patchValue(this.lagerRegal[1]);
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

  statusListOptions = statusAusgangList;
  bearbeiterOptions = users;

  bezeichnungBagOptions = [
    {name: 'B001', value: 'B001'},
    {name: 'B002', value: 'B002'},
    {name: 'B003', value: 'B003'},
    {name: 'B004', value: 'B004'},
    {name: 'B005', value: 'B005'},
    {name: 'B006', value: 'B006'},
    {name: 'B007', value: 'B007'},
    {name: 'B008', value: 'B008'},
    {name: 'B009', value: 'B009'},
  ];

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
      status: [null],
      bearbeiter: [Validators.required]
    });

    this.status.patchValue(this.statusListOptions.filter(s => s.value === this.auftrag.status)[0]);

    this.auftragList.forEach((a: any) => {
      this.formGroup?.addControl(
        a.produkt + '.' + a.kategorie, this.formBuilder.control(null, Validators.required)
      );

      this.formGroup?.addControl(
        a.produkt + '.' + a.kategorie + '_bag', this.formBuilder.control(null, Validators.required)
      );

      this.formGroup?.addControl(
        a.produkt + '.' + a.kategorie + '_lager', this.formBuilder.control(null, Validators.required)
      );
    });
  }

  getForm(a: any): FormControl {
    const name = a.produkt + '.' + a.kategorie;
    return this.formGroup?.controls[name] as FormControl;
  }

  getFormBag(a: any): FormControl {
    const name = a.produkt + '.' + a.kategorie + '_bag';
    return this.formGroup?.controls[name] as FormControl;
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

  setCountedTotal(): void {
    this.countTotal = this.auftragList.map((a: any) => this.getForm(a).value * a.wert).reduce((a1: any, a2: any) => a1 + a2);
  }

  save(): void {
    this.auftrag.status = this.status.value.value;

    if (this.status.value.value === 'GERUESTET') {
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
    return (this.status.value.value === 'GROBKONTROLLIERT'
      && (this.countTotal !== this.total && !this.bemerkung.value));
  }
}
