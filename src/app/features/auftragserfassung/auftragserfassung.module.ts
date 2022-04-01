import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuftragserfassungRoutingModule } from './auftragserfassung-routing.module';
import { EinkaufenComponent } from './einkaufen/einkaufen.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { BestellungenComponent } from './bestellungen/bestellungen.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { AuftragserfassungComponent } from './auftragserfassung.component';


@NgModule({
  declarations: [
    EinkaufenComponent,
    WarenkorbComponent,
    BestellungenComponent,
    AuftragserfassungComponent
  ],
  imports: [
    CommonModule,
    AuftragserfassungRoutingModule,
    ButtonModule,
    RippleModule,
    TableModule,
    TooltipModule,
    TabViewModule
  ]
})
export class AuftragserfassungModule { }
