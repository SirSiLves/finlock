import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuftragsverwaltungComponent } from './auftragsverwaltung.component';

const routes: Routes = [
  {
    path: '', component: AuftragsverwaltungComponent
  },
  {
    path: 'auftragsliste', component: AuftragsverwaltungComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuftragsverwaltungRoutingModule { }
