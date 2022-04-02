import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuftragsverwaltungRoutingModule } from './auftragsverwaltung-routing.module';
import { AuftragsverwaltungComponent } from './auftragsverwaltung.component';
import { CardModule } from 'primeng/card';
import { AuftragslisteComponent } from './auftragsliste/auftragsliste.component';


@NgModule({
  declarations: [
    AuftragsverwaltungComponent,
    AuftragslisteComponent
  ],
  imports: [
    CommonModule,
    AuftragsverwaltungRoutingModule,
    CardModule
  ]
})
export class AuftragsverwaltungModule { }
