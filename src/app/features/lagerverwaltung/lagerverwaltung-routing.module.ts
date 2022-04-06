import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LagerverwaltungComponent } from './lagerverwaltung.component';

const routes: Routes = [
  {
    path: '',
    component: LagerverwaltungComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LagerverwaltungRoutingModule { }
