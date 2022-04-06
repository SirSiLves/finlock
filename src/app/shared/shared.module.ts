import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputErrorMessageComponent } from './components/input-error-message/input-error-message.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    InputErrorMessageComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RippleModule,
    ButtonModule,
    RouterModule
  ],
  exports: [
    InputErrorMessageComponent,
    MaintenanceComponent
  ]
})
export class SharedModule {
}
