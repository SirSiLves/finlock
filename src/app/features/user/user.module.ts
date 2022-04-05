import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AuftragserfassungModule } from '../auftragserfassung/auftragserfassung.module';
import { ProfilComponent } from './profil/profil.component';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ProfilComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CardModule,
    RippleModule,
    ButtonModule,
    AuftragserfassungModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    DividerModule
  ]
})
export class UserModule { }
