import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuftragsverwaltungComponent } from './auftragsverwaltung.component';
import { WareneingangComponent } from './wareneingang/wareneingang.component';
import { WarenausgangComponent } from './warenausgang/warenausgang.component';

const routes: Routes = [
  {
    path: '', component: AuftragsverwaltungComponent
  },
  {
    path: 'auftragsliste', component: AuftragsverwaltungComponent
  },
  {
    path: 'wareneingang', component: WareneingangComponent
  },
  {
    path: 'wareneingang/:id', component: WareneingangComponent
  },
  {
    path: 'warenausgang', component: WarenausgangComponent
  },
  {
    path: 'warenausgang/:id', component: WarenausgangComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuftragsverwaltungRoutingModule { }
