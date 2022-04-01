import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EinkaufenComponent } from './einkaufen/einkaufen.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { BestellungenComponent } from './bestellungen/bestellungen.component';
import { AuftragserfassungComponent } from './auftragserfassung.component';

const routes: Routes = [
  {
    path: '',
    component: EinkaufenComponent
  },
  {
    path: 'einkaufen',
    component: AuftragserfassungComponent
  },
  {
    path: 'warenkorb',
    component: WarenkorbComponent
  },
  {
    path: 'bestellungen',
    component: BestellungenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuftragserfassungRoutingModule {
}
