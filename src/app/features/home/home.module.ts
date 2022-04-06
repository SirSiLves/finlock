import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NewsComponent } from './news/news.component';
import { CardModule } from 'primeng/card';
import { ImpressumComponent } from './impressum/impressum.component';
import { DsgvoComponent } from './dsgvo/dsgvo.component';


@NgModule({
  declarations: [
    NewsComponent,
    ImpressumComponent,
    DsgvoComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CardModule
    ]
})
export class HomeModule { }
