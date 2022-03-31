import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuftragserfassungRoutingModule } from './auftragserfassung-routing.module';
import { AuftragserfassungComponent } from './auftragserfassung.component';
import { EinkaufenComponent } from './einkaufen/einkaufen.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { BestellungenComponent } from './bestellungen/bestellungen.component';


@NgModule({
  declarations: [
    AuftragserfassungComponent,
    EinkaufenComponent,
    WarenkorbComponent,
    BestellungenComponent
  ],
  imports: [
    CommonModule,
    AuftragserfassungRoutingModule
  ]
})
export class AuftragserfassungModule { }
