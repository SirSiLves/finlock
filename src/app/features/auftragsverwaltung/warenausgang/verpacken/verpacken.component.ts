import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { users } from '@test/user-data';
import { statusAusgangList } from '@test/status-data';

@Component({
  selector: 'app-verpacken',
  templateUrl: './verpacken.component.html',
  styleUrls: ['./verpacken.component.scss']
})
export class VerpackenComponent {

  @Input() set data(auftrag: any) {
    this.auftrag = auftrag;
    this.auftragList = auftrag.produkte;
    this.total = auftrag.wert;
    this.fillFormGroup();

    if (this.status.value.value === 'NEU') {
      this.formGroup?.disable();
    }

    if (this.status.value.value === 'VERPACKT' || this.status.value.value === 'VERSENDET') {
      this.auftragList.forEach((a: any) => {
        this.getForm(a).patchValue(a.anzahl);
      });

      this.pallet.patchValue(this.bezeichnungPalletOptions[2]);
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

  bezeichnungPalletOptions = [
    {name: 'AABB01', value: 'AABB01'},
    {name: 'AABB02', value: 'AABB02'},
    {name: 'AABB03', value: 'AABB03'},
    {name: 'AABB04', value: 'AABB04'},
    {name: 'AABB05', value: 'AABB05'},
    {name: 'AABB06', value: 'AABB06'},
    {name: 'BBAA01', value: 'BBAA01'},
    {name: 'BBAA02', value: 'BBAA02'},
    {name: 'BBAA03', value: 'BBAA03'},
  ];

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  private fillFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      bemerkung: [''],
      status: [null],
      pallet: ['', Validators.required],
      bearbeiter: [Validators.required]
    });

    this.status.patchValue(this.statusListOptions.filter(s => s.value === this.auftrag.status)[0]);

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

  get status(): FormControl {
    return this.formGroup?.controls.status as FormControl;
  }

  get bearbeiter(): FormControl {
    return this.formGroup?.controls.bearbeiter as FormControl;
  }

  get pallet(): FormControl {
    return this.formGroup?.controls.pallet as FormControl;
  }

  setCountedTotal(): void {
    this.countTotal = this.auftragList.map((a: any) => this.getForm(a).value * a.wert).reduce((a1: any, a2: any) => a1 + a2);
  }

  save(): void {
    this.auftrag.status = this.status.value.value;

    if (this.status.value.value === 'VERPACKT') {
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
    return (this.status.value.value === 'VERPACKT'
      && (this.countTotal !== this.total && !this.bemerkung.value));
  }
}
