import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuftragserfassungRoutingModule } from './auftragserfassung-routing.module';
import { EinkaufenComponent } from './einkaufen/einkaufen.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { BestellungenComponent } from './bestellungen/bestellungen.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { AuftragserfassungComponent } from './auftragserfassung.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { InputErrorMessageComponent } from '../../shared/components/input-error-message/input-error-message.component';
import { PickListModule } from 'primeng/picklist';
import { WarenkorbDetailsComponent } from './warenkorb/warenkorb-details/warenkorb-details.component';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';
import { SplitterModule } from 'primeng/splitter';


@NgModule({
    declarations: [
        EinkaufenComponent,
        WarenkorbComponent,
        BestellungenComponent,
        AuftragserfassungComponent,
        InputErrorMessageComponent,
        WarenkorbDetailsComponent
    ],
    exports: [
        InputErrorMessageComponent
    ],
  imports: [
    CommonModule,
    AuftragserfassungRoutingModule,
    ButtonModule,
    RippleModule,
    TableModule,
    TooltipModule,
    TabViewModule,
    InputNumberModule,
    ReactiveFormsModule,
    FormsModule,
    PickListModule,
    FieldsetModule,
    CardModule,
    DropdownModule,
    AccordionModule,
    SplitterModule,
  ]
})
export class AuftragserfassungModule { }
