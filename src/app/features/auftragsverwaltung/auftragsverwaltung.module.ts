import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuftragsverwaltungRoutingModule } from './auftragsverwaltung-routing.module';
import { AuftragsverwaltungComponent } from './auftragsverwaltung.component';
import { CardModule } from 'primeng/card';
import { AuftragslisteComponent } from './auftragsliste/auftragsliste.component';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { WareneingangComponent } from './wareneingang/wareneingang.component';
import { WarenausgangComponent } from './warenausgang/warenausgang.component';


@NgModule({
  declarations: [
    AuftragsverwaltungComponent,
    AuftragslisteComponent,
    WareneingangComponent,
    WarenausgangComponent
  ],
  imports: [
    CommonModule,
    AuftragsverwaltungRoutingModule,
    CardModule,
    TableModule,
    TooltipModule
  ]
})
export class AuftragsverwaltungModule { }
