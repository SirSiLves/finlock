import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { auftraege } from '@test/auftraege-data';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-wareneingang',
  templateUrl: './wareneingang.component.html',
  styleUrls: ['./wareneingang.component.scss']
})
export class WareneingangComponent implements OnInit, OnDestroy {

  onDestroy$ = new Subject<void>();

  auftrag: any;

  formGroup = this.formBuilder.group({
    suche: [null, [Validators.required]]
  });

  activeState: boolean[] = [false, false, false];

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.findAuftrag();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  findAuftrag(): void {
    this.activatedRoute.url.pipe(takeUntil(this.onDestroy$)).subscribe(url =>
      this.openAuftrag(Number(url[1]?.path))
    );
  }

  openAuftrag(id: number): void {
    this.auftrag = auftraege.filter((a: any) => a.id === id && a.typ === 'KAUF').shift();
    this.location.replaceState("/auftragsverwaltung/wareneingang/" + id);

    this.activeState[0] = this.isGrobkontrolle();
    this.activeState[1] = this.isFeinkontrolle();
    this.activeState[2] = this.isEinlagerung();
  }

  get suche(): FormControl {
    return this.formGroup.controls.suche as FormControl;
  }

  back(): void {
    this.location.back();
  }

  isGrobkontrolle(): boolean {
    return this.auftrag.status === 'NEU';
  }

  isFeinkontrolle(): boolean {
    return this.auftrag.status === 'GROBKONTROLLIERT';
  }

  isEinlagerung(): boolean {
    return this.auftrag.status === 'EINGELAGERT';
  }
}
