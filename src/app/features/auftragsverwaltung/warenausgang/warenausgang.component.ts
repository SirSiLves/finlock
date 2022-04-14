import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { auftraege } from '@test/auftraege-data';

@Component({
  selector: 'app-warenausgang',
  templateUrl: './warenausgang.component.html',
  styleUrls: ['./warenausgang.component.scss']
})
export class WarenausgangComponent implements OnInit, OnDestroy {

  onDestroy$ = new Subject<void>();

  auftrag: any;

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
    if (!id) return;

    this.auftrag = undefined;

    // Workaround for Change Detection on @Input
    setTimeout(() => {
      this.auftrag = auftraege.filter((a: any) => a.id === id && a.typ === 'VERKAUF').shift();

      if (!this.auftrag) return;

      this.location.replaceState("/auftragsverwaltung/warenausgang/" + id);

      this.activeState[0] = this.isRuesten();
      this.activeState[1] = this.isVerpacken();
      this.activeState[2] = this.isVersenden();
    }, 1);
  }

  isRuesten(): boolean {
    return this.auftrag.status === 'NEU';
  }

  isVerpacken(): boolean {
    return this.auftrag.status === 'GERUESTET';
  }

  isVersenden(): boolean {
    return this.auftrag.status === 'VERPACKT';
  }

  save($event: any): void {
    auftraege.filter((a: any) => a.id === $event.id)[0].status = $event.status;
    this.openAuftrag(this.auftrag.id);
  }

}
