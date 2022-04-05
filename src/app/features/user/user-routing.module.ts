import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from '../../core/authentication.service';

const routes: Routes = [
  {
    path: 'profil', component: ProfilComponent,
    canActivate: [AuthenticationService]
  },
  {
    path: 'anmelden', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
