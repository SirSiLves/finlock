import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { AuftragserfassungModule } from '../auftragserfassung/auftragserfassung.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    ProfilComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    CardModule,
    RippleModule,
    ButtonModule,
    AuftragserfassungModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule
  ]
})
export class ProfilModule { }
