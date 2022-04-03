import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { bearbeiter } from '@test/bearbeiter-data';
import { statusAusgangList } from '@test/status-data';

@Component({
  selector: 'app-versenden',
  templateUrl: './versenden.component.html',
  styleUrls: ['./versenden.component.scss']
})
export class VersendenComponent {

  @Input() set data(auftrag: any) {
    this.auftrag = auftrag;
    this.auftragList = auftrag.produkte;
    this.total = auftrag.wert;
    this.fillFormGroup();

    if (this.status.value.value === 'NEU' || this.status.value.value === 'GERUESTET') {
      this.formGroup?.disable();
    }

    if (this.status.value.value === 'VERSENDET') {
      this.auftragList.forEach((a: any) => {
        this.getFormBag(a).patchValue(this.bagVorhandenOptions[0]);
      });

      this.lieferant.patchValue(this.lieferantOptions[1]);
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
  bearbeiterOptions = bearbeiter;

  bagVorhandenOptions = [
    {name: 'Ja', value: true},
    {name: 'Nein', value: false},
  ];

  lieferantOptions = [
    {name: 'DHL Express', value: 'dhl'},
    {name: 'Post', value: 'post'},
    {name: 'FedEx', value: 'fedex'},
    {name: 'Loomis Schweiz', value: 'loomis'},
  ];

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  private fillFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      bemerkung: [''],
      status: [null],
      bearbeiter: [Validators.required],
      lieferant: ['', Validators.required]
    });

    this.status.patchValue(this.statusListOptions.filter(s => s.value === this.auftrag.status)[0]);

    this.auftragList.forEach((a: any) => {
      this.formGroup?.addControl(
        a.produkt + '.' + a.kategorie + '_bag', this.formBuilder.control(null, Validators.required)
      );
    });
  }

  getFormBag(a: any): FormControl {
    const name = a.produkt + '.' + a.kategorie + '_bag';
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

  get lieferant(): FormControl {
    return this.formGroup?.controls.lieferant as FormControl;
  }

  setCountedTotal(): void {
    this.countTotal = this.auftragList.map(
      (a: any) => this.getFormBag(a).value?.value ? a.anzahl * a.wert : 0).reduce((a1: any, a2: any) => a1 + a2
    );
  }

  save(): void {
    this.auftrag.status = this.status.value.value;

    if (this.status.value.value === 'VERSENDET') {
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
    return (this.status.value.value === 'VERSENDET'
      && (this.countTotal !== this.total && !this.bemerkung.value));
  }
}
