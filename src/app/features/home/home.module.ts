import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NewsComponent } from './news/news.component';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    NewsComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CardModule
    ]
})
export class HomeModule { }
