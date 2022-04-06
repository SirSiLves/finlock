import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LagerverwaltungRoutingModule } from './lagerverwaltung-routing.module';
import { LagerverwaltungComponent } from './lagerverwaltung.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LagerverwaltungComponent
  ],
  imports: [
    CommonModule,
    LagerverwaltungRoutingModule,
    SharedModule
  ]
})
export class LagerverwaltungModule {
}
