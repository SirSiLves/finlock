import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KontaktRoutingModule } from './kontakt-routing.module';
import { KontaktComponent } from './kontakt.component';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AuftragserfassungModule } from '../auftragserfassung/auftragserfassung.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    KontaktComponent
  ],
  imports: [
    CommonModule,
    KontaktRoutingModule,
    CardModule,
    ReactiveFormsModule,
    AuftragserfassungModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputTextareaModule,
    FileUploadModule,
    HttpClientModule,
    SharedModule
  ]
})
export class KontaktModule { }
