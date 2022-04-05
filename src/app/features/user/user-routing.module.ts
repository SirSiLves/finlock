import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { AuthenticationService } from '../../core/authentication.service';

const routes: Routes = [
  {
    path: 'profil', component: ProfilComponent,
    canActivate: [AuthenticationService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
